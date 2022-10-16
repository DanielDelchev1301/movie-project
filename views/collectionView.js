import { html } from '../node_modules/lit-html/lit-html.js';
import { getAllMovies } from '../services/movieService.js';

const mainRoot = document.getElementById('main-content');

const movieTemplate = (movie) => html`
    <div class="container-box">
            <img src="${movie.img}" alt="Avatar" class="image">
            <div class="middle">
                <div class="text"><a href="/details/${movie._id}">Details</a></div>
            </div>
    </div>
`;

const collectionTemplate = (movies) => html`
    <h1>All movies</h1>
    <div id="all-movies">
        ${movies.map(movie => movieTemplate(movie))}
    </div>
`;

export function collectionView(ctx) {
    getAllMovies()
    .then(movies => {
        ctx.render(collectionTemplate(movies), mainRoot);
    })
    .catch(err => console.log(err));
}