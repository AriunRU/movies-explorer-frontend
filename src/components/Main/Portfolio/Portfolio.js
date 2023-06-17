import React from "react";
import PortfolioLink from "../../PortfolioLink/PortfolioLink";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <PortfolioLink
            text="Статичный сайт"
            link="https://github.com/AriunRU/how-to-learn"/>
        </li>
        <li className="portfolio__item">
          <PortfolioLink
            text="Адаптивный сайт"
            link="https://ariunru.github.io/russian-travel/"/>
        </li>
        <li className="portfolio__item">
          <PortfolioLink
            text="Одностраничное приложение"
            link="https://github.com/AriunRU/react-mesto-api-full-gha"/>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
