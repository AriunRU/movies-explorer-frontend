import React from "react";
import movie from "../../images/movie.png";
import { useLocation } from 'react-router-dom';

function MoviesCard() {
  let location = useLocation();
  return (
    <section className="movie">
      <div className="movie__container">
        <div className="movie__info">
          <h2 className="movie__name">33 слова о дизайне</h2>
          <h2 className="movie__duration">1ч 47м</h2>
        </div>
        <button
          type="button"
          aria-label="Сохранить"
          className={`movie__button ${(location.pathname === "/movies") ? "movie__save" : "movie__close"}`}
        />
      </div>
      <img className="movie__img" src={movie} alt="movieimage" />
    </section>
  );
}

export default MoviesCard;