import React from "react";
import Title from "../Title/Title";
import photo from "../../images/photo.jpg";

function AboutMe() {
  return (
    <>
      <Title title="Студент" id="about-me" />
      <section className="about-me">
        <img className="about-me__photo" src={photo} alt="Фото профиля" />
        <article className="about-me__info">
          <div>
            <h3 className="about-me__name">Кирилл</h3>
            <p className="about-me__prof">Web-разработчик, 20 лет</p>
            <p className="about-me__about">
            Я родился и живу в Перми, закончил факультет
            Компьютерных систем и комплексов в Пермском радиотехническом колледже
            Люблю слушать музыку, и вечерами кататься на электросамокате.
            Год назад захотел менять мир к лучшему и начал кодить.
            Сейчас работаю преподавателем робототехники для подрастающего поколения на наборах Lego.
            После защиты диплома буду активно искать работу в сфере дизайна и разработки.
            </p>
          </div>
          <a
            className="about-me__link"
            href="https://github.com/AriunRU"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </article>
      </section>
    </>
  );
}

export default AboutMe;
