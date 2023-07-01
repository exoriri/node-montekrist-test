export const renderCharsTable = (chars, currentPage) => {
    return `<div id="people-content" class="col">
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
              <div id="people-pagination" class="table-pagination-links">
                <a class="table-pagination-links__item">Prev</a>
                <p class="table-pagination-links__item table-pagination-links__item--page">${currentPage}</p>
                <a class="table-pagination-links__item">Next</a>
              </div>
          </div>`.replace(/,/g, '');
  };
  
  export const renderPlanetsTable = (planets, currentPage) => {
    return `<div id="planets-content" class="col">
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
              <div id="planets-pagination" class="table-pagination-links">
                <a class="table-pagination-links__item">Prev</a>
                <p class="table-pagination-links__item table-pagination-links__item--page">${currentPage}</p>
                <a class="table-pagination-links__item">Next</a>
              </div>
          </div>`.replace(/,/g, '');
  };

  export const renderStarshipsTable = (starships, currentPage) => {
    return `<div id="starships-content" class="col">
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
        <div id="starships-pagination" class="table-pagination-links">
            <a class="table-pagination-links__item">Prev</a>
            <p class="table-pagination-links__item table-pagination-links__item--page">${currentPage}</p>
            <a class="table-pagination-links__item">Next</a>
        </div>
    </div>`.replace(/,/g, '');
  }
  
  export const renderEmptyMessage = (entity) => `<h4>${entity} not found</h4>`;