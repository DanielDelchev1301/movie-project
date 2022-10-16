import page from '../node_modules/page/page.mjs';
const baseUrl = 'http://localhost:3030/users';

export function isAuth() {
    return Boolean(localStorage.getItem('user'));
}

export function logoutHandler() {
    localStorage.clear();
    page.redirect('/');
}

export function getUser() {
    return localStorage.getItem('user');
}

export function loginHandler(e) {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    if (email != '' && password != '') {

        fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
            .then(res => res.json())
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                page.redirect('/');
            })
            .catch(error => alert(error.message));
    } else {
        alert('Every field must be filled!');
    }
}

export function registerHandler(e) {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    if (email != '' && password != '') {

        fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
            .then(res => res.json())
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                page.redirect('/');
            })
            .catch(error => alert(error.message));
    } else {
        alert('Every field must be filled!');
    }
}