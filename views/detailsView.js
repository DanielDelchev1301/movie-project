import { html } from '../node_modules/lit-html/lit-html.js';
import { getOneMovie } from '../services/movieService.js';

const mainRoot = document.getElementById('main-content');

const detailsTemplate = (movie) => html`
    <h1>${movie.title}</h1>

    <div id="details-container">
        <div id="details-box">
                <img src="${movie.img}" alt="Avatar" id="details-img">
                <div id="details-middle">
                    <div class="details-text"><a href="/details/${movie._id}">Like</a></div>
                    <div class="details-text"><a href="/details/${movie._id}">Unlike</a></div>
                    <div class="details-text"><a href="/details/${movie._id}">Delete</a></div>
                </div>
        </div>
    </div>

    <div id="details-description">
        <p>${movie.description}</p>
    </div>
`;

export function detailsView(ctx) {
    const id = ctx.params._id;
    console.log(id);

    getOneMovie(id)
        .then(movie => {
            ctx.render(detailsTemplate(movie), mainRoot);
        })
        .catch(error => alert(error.message));
}