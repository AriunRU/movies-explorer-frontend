import React from "react";
import me from "../../../images/me.jpg";

function AboutMe() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">Студент</h2>
      <div className="about__main">
        <div className="about__info">
          <h2 className="about__name">Кирилл</h2>
          <h3 className="about__profession">Web-разработчик, 20 лет</h3>
          <h3 className="about__text">
            Я родился и живу в Перми, закончил факультет
            Компьютерных систем и комплексов в Пермском радиотехническом колледже
            Люблю слушать музыку, и вечерами кататься на электросамокате.
            Год назад захотел менять мир к лучшему и начал кодить.
            Сейчас работаю преподавателем робототехники для подрастающего поколения на наборах Lego.
            После защиты диплома буду активно искать работу в сфере дизайна и разработки.
          </h3>
          <a href="https://github.com/AriunRU" target="_blank" className="about__link" rel="noreferrer">Github</a>
        </div>
        <img className="about__img" src={me} alt="Me"></img>
      </div>
    </section>
  );
}

export default AboutMe;
