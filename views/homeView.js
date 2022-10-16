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
        <h2>MovieFactory</h2>
        <h2>is the place</h2>
        <h2>that you will love</h2>
    </div>
    <div id="description-content">
        <p>oafjoiwqjo oijiojoi iow diowjoi nwio iowjdiojio owidjio jwiodjiojwoi jiowjdoi jiowjdoijwdio wiodop opw poopkpdompow opwo ipwd ippidpwipi wpowpod</p>
    </div>
`;

export function homeView(ctx) {
    getAllMovies()
        .then(movies => {
            ctx.render(homeTemplate(movies), mainRoot);
        })
        .catch(err => console.log(err));
}