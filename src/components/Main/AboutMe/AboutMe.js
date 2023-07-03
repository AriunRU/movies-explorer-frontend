import studentPhoto from '../../../images/my-photo.svg'

export function AboutMe() {
    return (
        <section className='author' id='about'>
            <h2 className='author__header'>Студент</h2>
            <div className='author__info'>
                <div className='author__text-box'>
                <h3 className='author__name'>Кирилл</h3>
                <p className='author__description'>Фронтенд-разработчик, 20 лет</p>
                <span className='author__about'>
                    Я родился и живу в Перми, закончил факультет Компьютерных систем и комплексов в Пермском радиотехническом колледже
                Люблю слушать музыку, и вечерами кататься на электросамокате. Год назад захотел менять мир к лучшему и начал кодить.
                Сейчас работаю преподавателем робототехники для подрастающего поколения на наборах Lego. 
                После защиты диплома буду активно искать работу в сфере дизайна и разработки</span>
                <a className="author__link" href="https://github.com/AriunRU" target="blank" title='Ссылка на Github'>Github</a>
                </div>
                <img className='author__photo' src={studentPhoto} alt='Фото автора'/>
            </div>
        </section>
    )
}