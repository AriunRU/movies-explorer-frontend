import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title"> Портфолио</h2>
      <a href="https://github.com/AriunRU/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer">
        <div className="portfolio__container">
          <h2 className="portfolio__text">Статичный сайт</h2>
          <h2 className="portfolio__arrow">↗</h2>
        </div>
      </a>
      <a href="https://AriunRU.github.io/russian-travel" className="portfolio__link" target="_blank" rel="noreferrer">
        <div className="portfolio__container">
          <h2 className="portfolio__text">Адаптивный сайт</h2>
          <h2 className="portfolio__arrow">↗</h2>
        </div>
      </a>
      <a href="https://ariun.nomoredomains.monster" className="portfolio__link" target="_blank" rel="noreferrer">
        <div className="portfolio__container portfolio__last">
          <h2 className="portfolio__text">Одностраничное приложение</h2>
          <h2 className="portfolio__arrow">↗</h2>
        </div>
      </a>
    </section>
  );
}

export default Portfolio;
