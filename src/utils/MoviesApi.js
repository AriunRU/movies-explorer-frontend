import { BASE_URL_MOVIES } from '../constants/constants';

function handleResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(new Error("Что-то пошло не так."))
}

export const getMovies = () => {
    return fetch(`${BASE_URL_MOVIES}/`, {
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(handleResponse)
}