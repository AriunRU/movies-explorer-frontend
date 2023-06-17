import React from "react";
import Title from "../../Title/Title";

function Techs() {
  return (
    <div className="techs">
      <Title title="Технологии" id="technologi"/>
      <section className="techs__section">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые
          применили в дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </section>
    </div>
  );
}

export default Techs;
