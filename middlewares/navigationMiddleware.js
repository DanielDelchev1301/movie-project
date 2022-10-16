import { html } from '../node_modules/lit-html/lit-html.js';

const navRoot = document.getElementById('navigation-content');

const navigationTemplate = () => html`
    <nav>
        <a href="/home">Home</a>
        <a href="/collection">Collection</a>
        <a href="/factory">Factory</a>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
        <a href="/logout">Logout</a>
    </nav>
`;

export function navigationMiddleware(ctx, next) {
    ctx.render(navigationTemplate(), navRoot);

    next();
}