import { getUser } from "./authService.js";
import page from '../node_modules/page/page.mjs';

const baseUrl = 'http://localhost:3030/data';

export function getAllMovies() {
    return fetch(`${baseUrl}/movies`)
        .then(res => res.json());
}

export function getOneMovie(id) {
    return fetch(`${baseUrl}/movies/${id}`)
        .then(res => res.json());
}

export function createHandler(e) {
    e.preventDefault();

    const { accessToken, _id } = JSON.parse(getUser());
    const { title, imgUrl, description } = Object.fromEntries(new FormData(e.currentTarget));

    if (title != '' && imgUrl != '' && description != '') {

        fetch(`${baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify({
                _ownerId: _id,
                title,
                description,
                img: imgUrl
            })
        })
            .then(res => res.json())
            .then(() => {
                page.redirect('/');
            })
            .catch(error => alert(error.message));
    } else {
        alert('Every field must be filled!');
    }
}

export function deleteHandler(ctx) {
    const id = ctx.params._id;
    const { accessToken } = JSON.parse(getUser());

    
    fetch(`${baseUrl}/movies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        }
    })
        .then(res => res.json())
        .then(() => {
            page.redirect('/collection');
        })
        .catch(err => alert(err.message));
}