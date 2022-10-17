import { html } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { getOneMovie } from '../services/movieService.js';
import { getUser } from '../services/authService.js';

const mainRoot = document.getElementById('main-content');

const editTemplate = (editHandler, movie) => html`

<div class="form-content">
    <form @submit=${editHandler} id="edit-form">
        <h2>Edit</h2>
    
        <label for="title" class="labels">Title:</label>
        <input type="text" id="title" class="inputs" name="title" value="${movie.title}"/>
    
        <label for="img" class="labels">Image url:</label>
        <input type="text" id="img" class="inputs" name="img" value="${movie.img}"/>
            
        <label for="description" class="labels">Description:</label>
        <textarea type="text" rows="10" id="description" class="inputs" name="description">${movie.description}</textarea>
        <button type="submit">Edit</button>
    </form>
</div>

`;

export async function editView(ctx) {
    const id = ctx.params._id;
    const movie = await getOneMovie(id);

    function editHandler(e) {
        e.preventDefault();

        const owner = JSON.parse(getUser());
        const movieData = Object.fromEntries(new FormData(e.currentTarget));
        movieData._ownerId = owner._id;
    
        fetch(`http://localhost:3030/data/movies/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': owner.accessToken
            },
            body: JSON.stringify(movieData)
        })
            .then(res => res.json())
            .then(updatedMovie => {
                page.redirect(`/details/${updatedMovie._id}`);
            })
            .catch(err => alert(err.message));
    }

    ctx.render(editTemplate(editHandler, movie), mainRoot);
}