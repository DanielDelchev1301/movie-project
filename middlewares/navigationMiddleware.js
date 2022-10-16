import { html } from '../node_modules/lit-html/lit-html.js';
import { isAuth } from '../services/authService.js';

const navRoot = document.getElementById('navigation-content');

const user = html`
    <a href="/factory">Factory</a>
    <a href="/logout">Logout</a>
`;

const guest = html`
    <a href="/register">Register</a>
    <a href="/login">Login</a>
`;

const navigationTemplate = (isAuth) => html`
    <nav>
        <a href="/">Home</a>
        <a href="/collection">Collection</a>
        ${isAuth?
          user
        : guest
        }
    </nav>
`;

export function navigationMiddleware(ctx, next) {
    ctx.render(navigationTemplate(isAuth()), navRoot);

    next();
}