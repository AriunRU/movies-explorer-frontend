import arrow from '../../../images/arrow.svg';

export function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__header'>Портфолио</h2>
            <a className='portfolio__link' href="https://ariunru.github.io/how-to-learn/" target="blank" title='Ссылка на репозиторий'>
            <p className="portfolio__link-text">Статичный сайт</p>
            <img src={arrow} alt='Картинка стрелочки' />
            </a>
            <a className='portfolio__link' href="https://AriunRU.github.io/russian-travel" target="blank" title='Ссылка на репозиторий'>
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <img src={arrow} alt='Картинка стрелочки' />
            </a>
            <a className='portfolio__link' href="https://ariun.nomoredomains.monster" target="blank" title='Ссылка на репозиторий'>
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <img src={arrow} alt='Картинка стрелочки' />
            </a>
        </section>
    )
}