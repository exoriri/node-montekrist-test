import { TABS_LIST } from "./constants.js";

export const getActiveTabs = () => {
    //we can have only one active tab
    const tabsItems = TABS_LIST.getElementsByTagName('a');
    const activeTabs = Array.from(tabsItems).reduce((acc, tab) => {
        if (tab.classList.contains('active')) {
            acc.push(tab.dataset.type);
        }
        return acc;
    }, []);
    return activeTabs.length > 0 ? activeTabs : ['people'];
};

export const renderCharsTable = (chars) => {
    return `<div id="swipe-1" class="col">
              <table class="highlight">
              <thead>
                  <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Weight</th>
                  </tr>
              </thead>
  
              <tbody>
                  ${chars.map(
                    (char) => `
                      <tr>
                          <td>${char.name}</td>
                          <td>${char.gender}</td>
                          <td>${char.mass}</td>
                      </tr>
                  `,
                  )}
              </tbody>
              </table>
          </div>`.replace(/,/g, '');
  };
  
  export const renderPlanetsTable = (planets) => {
    return `<div id="swipe-2" class="col">
              <table class="highlight">
              <thead>
                  <tr>
                  <th>Name</th>
                  <th>Diameter</th>
                  <th>Population</th>
                  </tr>
              </thead>
  
              <tbody>
                  ${planets.map(
                    (planet) => `
                      <tr>
                          <td>${planet.name}</td>
                          <td>${planet.diameter}</td>
                          <td>${planet.population}</td>
                      </tr>
                  `,
                  )}
              </tbody>
              </table>
          </div>`.replace(/,/g, '');
  };

  export const renderStarshipsTable = (starships) => {
    return `<div id="swipe-2" class="col">
        <table class="highlight">
            <thead>
                <tr>
                <th>Name</th>
                <th>Length</th>
                <th>Crew size</th>
                </tr>
            </thead>

            <tbody>
                ${starships.map(
                (starship) => `
                    <tr>
                        <td>${starship.name}</td>
                        <td>${starship.length}</td>
                        <td>${starship.crew}</td>
                    </tr>
                `,
                )}
            </tbody>
        </table>
    </div>`.replace(/,/g, '');
  }
  
  export const renderEmptyMessage = (entity) => `<h4>${entity} not found</h4>`;