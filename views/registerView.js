import { html } from '../node_modules/lit-html/lit-html.js';
import { registerHandler } from '../services/authService.js';

const mainRoot = document.getElementById('main-content');

const registerTemplate = (registerHandler) => html`

<div class="form-content">
    <form @submit=${registerHandler} id="register-form">
        <h2>Register</h2>
    
        <label for="email" class="labels">Email:</label>
        <input type="email" id="email" class="inputs" name="email" />
    
        <label for="password" class="labels">Password:</label>
        <input type="password" id="password" class="inputs" name="password" />
        <button type="submit">Register</button>
        <p class="message">
            Already have an account? <a href="/login">Log in</a>
        </p>
    </form>
</div>

`;

export function registerView(ctx) {
    ctx.render(registerTemplate(registerHandler), mainRoot);
}