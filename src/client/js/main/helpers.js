import { TABS_LIST } from './constants.js';

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

export const addPaginationListeners = (
  prevLinkEnabled,
  nextLinkEnabled,
  onPaginationLinkClick,
) => {
  const activeTab = getActiveTabs()[0];
  const paginationParent = document.getElementById(`${activeTab}-pagination`);
  const paginationPrevLink = paginationParent.children[0];
  const paginationNextLink =
    paginationParent.children[paginationParent.children.length - 1];
  const page = paginationParent.children[1].innerText;

  if (!prevLinkEnabled) {
    paginationPrevLink.disabled = true;
    paginationPrevLink.classList.add('table-pagination-links__item--disabled');
  } else {
    paginationPrevLink.classList.remove(
      'table-pagination-links__item--disabled',
    );
    paginationPrevLink.addEventListener('click', function (e) {
      const numericPage = parseInt(page, 10) - 1;
      onPaginationLinkClick(numericPage);
    });
  }

  if (!nextLinkEnabled) {
    paginationNextLink.disabled = true;
    paginationNextLink.classList.add('table-pagination-links__item--disabled');
  } else {
    paginationNextLink.classList.remove(
      'table-pagination-links__item--disabled',
    );
    paginationNextLink.addEventListener('click', function (e) {
      const numericPage = parseInt(page, 10) + 1;
      onPaginationLinkClick(numericPage);
    });
  }
};
