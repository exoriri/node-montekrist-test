import { SEARCH_BTN, TABS_LIST, TABS_CONTENT } from './constants.js';
import { SmallLoader } from '../components/small-loader.js';
import { PageLoader } from '../components/page-loader.js';
import {
  renderCharsTable,
  renderPlanetsTable,
  renderStarshipsTable,
  renderEmptyMessage,
} from './templates.js';
import { addPaginationListeners } from './helpers.js';

const searchField = document.getElementById('search-field');

export const searchBtnHandler = async (activeTabs, currentPage) => {
  const handlePaginationLinkClick = (page) => {
    searchBtnHandler(activeTabs, page);
  };

  SEARCH_BTN.innerHTML = SmallLoader;
  SEARCH_BTN.disabled = true;
  TABS_CONTENT.innerHTML = PageLoader;

  try {
    const searchText = searchField.value.toLowerCase();
    const types = activeTabs !== undefined ? activeTabs : ['people'];
    const res = await fetch(
      `/search?text=${searchText}&types=${types}&page=${currentPage}`,
    );
    const { people, planets, starships } = await res.json();
    //types always consist one item
    const activeTab = types[0];

    switch (activeTab) {
      case 'people': {
        TABS_CONTENT.innerHTML = '';
        if (people.found !== null && people.found.length !== 0) {
          TABS_CONTENT.innerHTML += renderCharsTable(people.found, currentPage);
          addPaginationListeners(
            people.prev,
            people.next,
            handlePaginationLinkClick,
          );
        } else {
          TABS_CONTENT.innerHTML += renderEmptyMessage('Characters');
        }
        break;
      }
      case 'planets': {
        TABS_CONTENT.innerHTML = '';

        if (planets.found !== null && planets.found.length !== 0) {
          TABS_CONTENT.innerHTML += renderPlanetsTable(
            planets.found,
            currentPage,
          );
          addPaginationListeners(
            people.prev,
            people.next,
            handlePaginationLinkClick,
          );
        } else {
          TABS_CONTENT.innerHTML += renderEmptyMessage('Planets');
        }

        break;
      }
      case 'starships': {
        TABS_CONTENT.innerHTML = '';
        if (starships.found !== null && starships.found.length !== 0) {
          TABS_CONTENT.innerHTML += renderStarshipsTable(
            starships.found,
            currentPage,
          );
          addPaginationListeners(
            people.prev,
            people.next,
            handlePaginationLinkClick,
          );
        } else {
          TABS_CONTENT.innerHTML += renderEmptyMessage('Starships');
        }
        break;
      }
      default:
        TABS_CONTENT.innerHTML = '';
        return;
    }
  } catch (e) {
    TABS_CONTENT.innerHTML = `<h4>Error on loading<h4>`;
    console.log(e, 'ERROR ON SEARCH');
  }

  SEARCH_BTN.innerHTML = 'Search';
  TABS_LIST.style.visibility = 'visible';
  SEARCH_BTN.disabled = false;
};
