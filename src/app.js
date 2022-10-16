import page from '../node_modules/page/page.mjs';

import { navigationMiddleware } from '../middlewares/navigationMiddleware.js';
import { renderMiddleware } from '../middlewares/renderMiddleware.js';

import { homeView } from '../views/homeView.js';
import { collectionView } from '../views/collectionView.js';
import { loginView } from '../views/loginView.js';

page(renderMiddleware);
page(navigationMiddleware);

page('/', homeView);
page('/collection', collectionView);
page('/login', loginView);

page.start();