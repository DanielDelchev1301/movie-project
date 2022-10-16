import { html } from '../node_modules/lit-html/lit-html.js';
import { createHandler } from '../services/movieService.js';
const mainRoot = document.getElementById('main-content');

const factoryTemplate = (crateHandler) => html`

<div class="form-content">
    <form @submit=${crateHandler} id="create-form">
        <h2>Create</h2>
    
        <label for="title" class="labels">Title:</label>
        <input type="text" id="title" class="inputs" name="title" />
    
        <label for="imgUrl" class="labels">Image url:</label>
        <input type="text" id="imgUrl" class="inputs" name="imgUrl" />
            
        <label for="description" class="labels">Description:</label>
        <textarea type="text" rows="10" id="description" class="inputs" name="description"></textarea>
        <button type="submit">Create</button>
    </form>
</div>

`;

export function factoryView(ctx) {
    ctx.render(factoryTemplate(createHandler), mainRoot);
}