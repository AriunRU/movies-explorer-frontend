import '../App/App.css';
import './AboutMe.css';
import RunningTitle from '../RunningTitle/RunningTitle';
import studentPhoto from '../../images/me.svg';

function AboutMe() {
  return (
    <section className='about-me' id='about'>
      <div className='wrapper'>
        <RunningTitle text='Студент' />
        <div className='about-me__block'>
          <div className='about-me__desription'>
            <h2 className='about-me__title'>Кирилл</h2>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 20 лет</p>
            <p className='about-me__text'>Я родился и живу в Перми, закончил факультет
            Компьютерных систем и комплексов в Пермском радиотехническом колледже
            Люблю слушать музыку, и вечерами кататься на электросамокате.
            Год назад захотел менять мир к лучшему и начал кодить.
            Сейчас работаю преподавателем робототехники для подрастающего поколения на наборах Lego.
            После защиты диплома буду активно искать работу в сфере дизайна и разработки.</p>
            <a className='about-me__link' href='https://github.com/AriunRU'>Github</a>
          </div>
          <img className='about-me__photo' src={studentPhoto} alt='фото студента' />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;