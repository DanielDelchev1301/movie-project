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

const homeTemplate = (movies) => html`
    <h1>Most popular</h1>
    <div id="new-ones">
        ${movies.map(movie => movieTemplate(movie))}
    </div>
    <div id="title-content">
        <h2 id="diff-color">MovieFactory</h2>
        <h2>is the place</h2>
        <h2>that you will love</h2>
    </div>
    <p id="dot">.</p>
    <div id="description-content">
        <p>We have passion about the movies around the world and everyone that love to grab a pack of popcorns and lay all day long with the best movies and series out there. If you are that kind of person, you are at the right place. Here you will find only high value titles and you will love them.</p>
    </div>
`;

export function homeView(ctx) {
    getAllMovies()
        .then(movies => {
            ctx.render(homeTemplate(movies), mainRoot);
        })
        .catch(err => console.log(err));
}