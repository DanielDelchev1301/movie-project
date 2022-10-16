import page from '../node_modules/page/page.mjs';

import { navigationMiddleware } from '../middlewares/navigationMiddleware.js';
import { renderMiddleware } from '../middlewares/renderMiddleware.js';

import { homeView } from '../views/homeView.js';
import { collectionView } from '../views/collectionView.js';
import { loginView } from '../views/loginView.js';
import { registerView } from '../views/registerView.js';
import { logoutHandler } from '../services/authService.js';
import { factoryView } from '../views/factoryView.js';

page(renderMiddleware);
page(navigationMiddleware);

page('/', homeView);
page('/collection', collectionView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutHandler);
page('/factory', factoryView);

page.start();