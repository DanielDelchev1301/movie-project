import { html } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { getUser } from '../services/authService.js';
import { getOneMovie } from '../services/movieService.js';

const mainRoot = document.getElementById('main-content');

const detailsTemplate = (movie, isOwner) => html`
    <h1>${movie.title}</h1>
    
    <div id="details-container">
        <div id="details-box">
            <img src="${movie.img}" alt="Avatar" id="details-img">
            <div id="details-middle">
                ${isOwner ? html`
                <div class="details-text"><a href="/edit/${movie._id}">Edit</a></div>
                <div class="details-text"><a href="/delete/${movie._id}">Delete</a></div>
                `
                : undefined}
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

    if (user) {

        getOneMovie(id)
            .then(movie => {
                const isOwner = movie._ownerId == user._id;
                ctx.render(detailsTemplate(movie, isOwner), mainRoot);
            })
            .catch(error => alert(error.message));
    } else {
        alert('Only logged in users can see details page.');
        page.redirect('/login');
    }
}