import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <section className='navigation'>
      <div className='navigation__container'>
        <nav className='navigation__block'>
          <NavLink className='navigation__link navigation__link_to_movies' to='/movies'>Фильмы</NavLink>
          <NavLink className='navigation__link navigation__link_to_saved-movies' to='/saved-movies'>Сохранённые фильмы</NavLink>
        </nav>
        <Link className='navigation__link' to='/profile'>
          <p className='navigation__text'>Аккаунт</p>
        </Link>
      </div>
    </section>
  )
}

export default Navigation;