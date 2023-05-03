import { A as ActiveRouter } from './active-router-319c0734.js';
import './match-path-1fcc8431.js';
import './index-3b293f20.js';
import './location-utils-0695d26f.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
