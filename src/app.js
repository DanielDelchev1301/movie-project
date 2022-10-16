import page from '../node_modules/page/page.mjs';

import { navigationMiddleware } from '../middlewares/navigationMiddleware.js';
import { renderMiddleware } from '../middlewares/renderMiddleware.js';

import { homeView } from '../views/homeView.js';

page(renderMiddleware);
page(navigationMiddleware);

page('/', homeView);

page.start();