import {searchBtnHandler} from './main.handlers.js';
import { getActiveTabs } from './helpers.js';
import { SEARCH_BTN, TABS_LIST } from './constants.js';

(() => {
    SEARCH_BTN.addEventListener('click', () => searchBtnHandler(getActiveTabs(), 1));

    TABS_LIST.addEventListener('click', (e) => {
        const tab = e.target;
        searchBtnHandler([tab.dataset.type], 1);
    });
})();