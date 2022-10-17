import page from '../node_modules/page/page.mjs';

import { navigationMiddleware } from '../middlewares/navigationMiddleware.js';
import { renderMiddleware } from '../middlewares/renderMiddleware.js';

import { homeView } from '../views/homeView.js';
import { collectionView } from '../views/collectionView.js';
import { loginView } from '../views/loginView.js';
import { registerView } from '../views/registerView.js';
import { logoutHandler } from '../services/authService.js';
import { factoryView } from '../views/factoryView.js';
import { detailsView } from '../views/detailsView.js';
import { deleteHandler } from '../services/movieService.js';
import { editView } from '../views/editView.js';

page(renderMiddleware);
page(navigationMiddleware);

page('/', homeView);
page('/collection', collectionView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutHandler);
page('/factory', factoryView);
page('/details/:_id', detailsView);
page('/delete/:_id', deleteHandler);
page('/edit/:_id', editView);

page.start();