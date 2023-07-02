function handleResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(new Error("Что-то пошло не так."))
}

export const getMovies = () => {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(handleResponse)
}