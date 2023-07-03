import { useEffect, useState } from 'react';
import { MoviesCardList } from '../Movies/MoviesCardList/MoviesCardList'
import { SearchForm } from '../Movies/SearchForm/SearchForm'
import * as myApi from '../../utils/myApi';
import { filterMoviesByDuration, filterMoviesByName } from '../../utils/finders';

export function SavedMovies(props) {
    const [isShorts, setShorts] = useState(false);
    const [listOfSavedMovies, setListOfSavedMovies] = useState(props.savedMovies);
    const [isReady, setIsReady] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setListOfSavedMovies(props.savedMovies);
        setIsReady(true);
    }, [props.savedMovies])

    function handleGetMovies(film, isShorts) {
        if (!film || film === ' ') {
            props.setIsInfoMessageOpen(true);
            props.setTextInfoMessage("Введите данные для поиска")
        } else {
            const filtredMovies = filterMoviesByName(props.savedMovies, film);
            const shortsFiltredMovies = filterMoviesByDuration(filtredMovies);

            if (isShorts) {
                setListOfSavedMovies(shortsFiltredMovies);
                setIsReady(true);
                if (shortsFiltredMovies.length < 1) {
                    setIsReady(false);
                    setErrorMessage('По вашему запросу ничего не найдено');
                }
            } else {
                setListOfSavedMovies(filtredMovies);
                setIsReady(true);
                if (filtredMovies.length < 1) {
                    setIsReady(false);
                    setErrorMessage('По вашему запросу ничего не найдено');
                }
            }
        }
    }

    function handleDeleteMovie(movieId, saveSetter) {
        myApi.deleteMovie(movieId)
            .then(() => {
                saveSetter(false);
                props.setSavedMovies((state) => state.filter((movie) => movie._id !== movieId));
                setListOfSavedMovies((state) => state.filter((movie) => movie._id !== movieId));
            })
            .catch((err) => console.log(err))
    }
    return (
        <section className="saved-content">
            <SearchForm isShorts={isShorts} setShorts={setShorts} handleGetMovies={handleGetMovies}
                isInfoMessageOpen={props.isInfoMessageOpen} closeInfoMessage={props.closeInfoMessage} textIfnoMessage={props.textIfnoMessage} />
            <div className='saved-content__line' />
            {isReady
                ? <>
                    <MoviesCardList deleteMovie={handleDeleteMovie} savedMovies={props.savedMovies} moviesList={listOfSavedMovies} isSavedMoviesPage={true} />
                </>
                : <>
                    <h2 className='saved-content__error'>{errorMessage}</h2>
                </>
            }
            <MoviesCardList />
        </section>
    )
}