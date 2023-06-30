import { NavLink } from 'react-router-dom';

function NavTab() {
  return (
    <nav className='navtab'>
      <NavLink className='navtab__auth' to='/signup'>Регистрация</NavLink>
      <NavLink className='navtab__auth navtab__auth-button' to='/signin'>Войти</NavLink>
    </nav>
  )
}

export default NavTab;