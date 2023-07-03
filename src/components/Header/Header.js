import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from './Menu/Menu';
import { useState } from 'react';

export function Header(props) {
    const { pathname } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={pathname === "/" ? 'header header_landing' : 'header'}>
            <div className='header__case'>
                <NavLink className='header__logo' to='/' />
                <div className='header__navigation'>
                    {props.loggedIn
                        ? <>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "header__link" : isActive
                                    ? "header__link header__link_active" : "header__link"}
                                to='/movies'>Фильмы</NavLink>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "header__link" : isActive
                                    ? "header__link header__link_active" : "header__link"}
                                to='/saved-movies'>Сохранённые фильмы</NavLink>
                        </>
                        : null
                    }
                </div>
            </div>
            {props.loggedIn
                ? <div className='header__profile'>
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "header__link" : isActive
                            ? "header__link header__link_active" : "header__link"}
                        to='/profile'>Аккаунт</NavLink>
                </div>
                : <div className='header__auth'>
                    <NavLink className='header__link' to='/sign-up'>Регистрация</NavLink>
                    <NavLink className='header__link header__link_signin' to='/sign-in'>Войти</NavLink>
                </div>
            }
            {props.loggedIn
                ? <div className='header__burger'>
                    <button onClick={handleMenuOpen} type='button' className='header__open-button' />
                </div>
                : null
            }
            <Menu isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
        </header >
    )
}