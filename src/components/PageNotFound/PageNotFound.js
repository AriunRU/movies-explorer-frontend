import React from "react";
import { Link } from 'react-router-dom';


function PageNotFound() {
  return (
    <section className="notfound">
      <div className="notfound__info">
        <h2 className="notfound__404">404</h2>
        <h2 className="notfound__text">Страница не найдена</h2>
      </div>
      <Link to="/" className="notfound__link">Назад</Link>
    </section>
  );
}

export default PageNotFound;
