import { useEffect, useState } from 'react'
import { URL_API_MOVIES } from '../../../constants/constants';

export function Card(props) {
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        if (props.savedMovies.some((movie) => movie.movieId === props.card.id)) {
            setIsSaved(true);
        }
    }, [props.savedMovies, props.card.id]);

    function handleSaveMovie() {
        const dataOfMovie = {
            country: props.card.country,
            director: props.card.director,
            duration: props.card.duration,
            year: props.card.year,
            description: props.card.description,
            image: props.card.image,
            trailerLink: props.card.trailerLink,
            thumbnail: props.card.thumbnail,
            movieId: props.card.id,
            nameRU: props.card.nameRU,
            nameEN: props.card.nameEN,
        };
        props.saveMovie(dataOfMovie, setIsSaved);
    }

    function handleDeleteMovie() {
        props.deleteMovie(props.card.id || props.card._id, setIsSaved);
    }
    return (
        <li className="movies__item">
            <div className='movies__info'>
                <div className='movies__case'>
                    <h2 className='movies__title'>{props.card.nameRU}</h2>
                    <p className='movies__duration'>{props.card.duration} минут</p>
                </div>
                <button
                    onClick={props.isSavedMoviesPage ? handleDeleteMovie : isSaved ? handleDeleteMovie : handleSaveMovie}
                    className={`movies__save-button ${props.isSavedMoviesPage ? 'movies__save-button_type_delete' : isSaved && 'movies__save-button_type_saved'}`}
                    type="button"
                    aria-label="Добавить в сохранённые фильмы или удалить из сохранённых фильмов">
                </button>
            </div>
            <a className='movies__link' href={props.card.trailerLink} target="blank" title='Ссылка на трейлер фильма'>
                <img className="movies__image" src={props.isSavedMoviesPage ? `${props.card.image}` : `${URL_API_MOVIES}${props.card.image.url}`} alt={props.card.nameRU} />
            </a>

        </li>
    )
}