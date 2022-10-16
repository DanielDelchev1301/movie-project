const baseUrl = 'http://localhost:3030/data';

export function getAllMovies() {
    return fetch(`${baseUrl}/movies`)
        .then(res => res.json());
}

export function createMovie() {
    
}