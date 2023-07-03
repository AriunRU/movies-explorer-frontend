import { Card } from '../Card/Card'

export function MoviesCardList(props) {
    return (
        <section className="movies">
            <ul className="movies__list">
                {props.moviesList && props.moviesList.map((card) => (
                    <Card isSavedMoviesPage={props.isSavedMoviesPage} deleteMovie={props.deleteMovie}
                        savedMovies={props.savedMovies} saveMovie={props.saveMovie} card={card} key={card.id || card._id} />
                ))}
            </ul>
        </section>
    )
}