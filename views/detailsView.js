import { html } from '../node_modules/lit-html/lit-html.js';
import { getUser } from '../services/authService.js';
import { getOneMovie } from '../services/movieService.js';

const mainRoot = document.getElementById('main-content');

const detailsTemplate = (movie, user, isOwner) => html`
    <h1>${movie.title}</h1>
    
    <div id="details-container">
        <div id="details-box">
            <img src="${movie.img}" alt="Avatar" id="details-img">
            <div id="details-middle">
                ${user? html`
                    ${isOwner? html`
                        <div class="details-text"><a href="/delete/${movie._id}">Delete</a></div>
                    `
                    : html`
                        <div class="details-text"><a href="/like/${movie._id}">Like</a></div>
                        <div class="details-text"><a href="/unlike/${movie._id}">Unlike</a></div>
                    `}
                `
                : html`
                    <div id="login-first-btn" class="details-text"><a href="/login">Login first</a></div>
                `}
            </div>
        </div>
    </div>
    
    <div id="details-description">
        <p>${movie.description}</p>
    </div>
`;

export async function detailsView(ctx) {
    const id = ctx.params._id;
    const user = await JSON.parse(getUser());

    getOneMovie(id)
        .then(movie => {
            const isOwner = movie._ownerId == user._id;
            ctx.render(detailsTemplate(movie, user, isOwner), mainRoot);
        })
        .catch(error => alert(error.message));
}