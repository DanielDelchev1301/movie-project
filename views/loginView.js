import { html } from '../node_modules/lit-html/lit-html.js';
import { loginHandler } from '../services/authService.js';

const mainRoot = document.getElementById('main-content');

const loginTemplate = (loginHandler) => html`

<div class="form-content">
    <form @submit=${loginHandler} id="login-form">
        <h2>Login</h2>
    
        <label for="email" class="labels">Email:</label>
        <input type="email" id="email" class="inputs" name="email" />
    
        <label for="password" class="labels">Password:</label>
        <input type="password" id="password" class="inputs" name="password" />
        <button type="submit">Login</button>
        <p class="message">
            Not registered? <a href="/register">Create an account</a>
        </p>
    </form>
</div>

`;

export function loginView(ctx) {
    ctx.render(loginTemplate(loginHandler), mainRoot);
}