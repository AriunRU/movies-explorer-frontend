import './Promo.css';
import '../App/App.css';

function Promo() {
  return (
    <section className='promo'>
        <h2 className="promo__title">Учебный проект студента &nbsp; факультета Веб-разработки.</h2>
        <ul className="navtab__menu">
          <li><a href="#project" className="navtab__link">О проекте</a></li>
          <li><a href="#techs" className="navtab__link">Технологии</a></li>
          <li><a href="#about" className="navtab__link">Студент</a></li>
        </ul>
    </section>
  )
}

export default Promo;