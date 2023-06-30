import { SEARCH_BTN, TABS_LIST, TABS_CONTENT } from "./constants.js";
import { SmallLoader } from "../components/small-loader.js";
import { PageLoader } from "../components/page-loader.js";
import { renderCharsTable, renderPlanetsTable, renderStarshipsTable, renderEmptyMessage } from "./helpers.js";

const searchField = document.getElementById('search-field');

let selectedTypes = [];

//activeTabs have same typization as selectedTypes
export const searchBtnHandler = async (activeTabs) => {
  SEARCH_BTN.innerHTML = SmallLoader;
  SEARCH_BTN.disabled = true;
  TABS_CONTENT.innerHTML = PageLoader;

  try {
    const searchText = searchField.value.toLowerCase();
    const types =
    activeTabs !== undefined
        ? activeTabs
        : selectedTypes.length === 0
        ? ['people']
        : selectedTypes;
    const res = await fetch(`/search?text=${searchText}&types=${types}`);
    const { people, planets, starships } = await res.json();

    TABS_CONTENT.innerHTML = '';
    TABS_CONTENT.innerHTML +=
      people.found !== null && types.includes('people') && people.found.length !== 0
        ? renderCharsTable(people.found)
        : types.includes('people')
        ? renderEmptyMessage('Characters')
        : ``;
    TABS_CONTENT.innerHTML +=
      planets.found !== null && types.includes('planets') && planets.found.length !== 0
        ? renderPlanetsTable(planets.found)
        : types.includes('planets')
        ? renderEmptyMessage('Planets')
        : ``;

    TABS_CONTENT.innerHTML +=
      starships.found !== null && types.includes('starships') && starships.found.length !== 0
        ? renderStarshipsTable(starships.found)
        : types.includes('starships')
        ? renderEmptyMessage('Starships')
        : ``;
  } catch (e) {
    TABS_CONTENT.innerHTML = `<h4>Error on loading<h4>`;
    console.log(e, 'ERROR ON SEARCH');
  }

  SEARCH_BTN.innerHTML = 'Search';
  TABS_LIST.style.visibility = 'visible';
  SEARCH_BTN.disabled = false;
};
