import '../App/App.css';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='wrapper'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='block portfolio__block'>
          <li className='block__item'>
            <a className='link portfolio__link' href='https://github.com/AriunRU/how-to-learn' target='_blank' rel='noreferrer'>
              <p className='link__text'>Статичный сайт</p>
              <h2 className="portfolio__arrow">↗</h2>
            </a>
          </li>
          <li className='block__item'>
            <a className='link portfolio__link' href='https://AriunRU.github.io/russian-travel' target='_blank' rel='noreferrer'>
              <p className='link__text'>Адаптивный сайт</p>
              <h2 className="portfolio__arrow">↗</h2>
            </a>
          </li>
          <li className='block__item'>
            <a className='link portfolio__link' href='https://ariun.nomoredomains.monster' target='_blank' rel='noreferrer'>
              <p className='link__text'>Одностраничное приложение</p>
              <h2 className="portfolio__arrow">↗</h2>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;