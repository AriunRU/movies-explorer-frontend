import { NavLink } from 'react-router-dom';

export function Menu(props, { onClose }) {
    return (
        <div className={`menu-overlay ${props.isMenuOpen && 'menu-overlay_visible'}`}>
            <div className={`menu ${props.isMenuOpen ? 'menu_visible' : 'menu_hidden'}`}>
                <nav className='menu__links'>
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "menu__link" : isActive
                            ? "menu__link menu__link_active" : "menu__link"}
                        to='/' onClick={onClose}>Главная</NavLink>
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "menu__link" : isActive
                            ? "menu__link menu__link_active" : "menu__link"}
                        to='/movies' onClick={onClose}>Фильмы</NavLink>
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "menu__link" : isActive
                            ? "menu__link menu__link_active" : "menu__link"}
                        to='/saved-movies' onClick={onClose}>Сохранённые фильмы</NavLink>
                </nav>
                <div className='menu__profile'>
                    <NavLink className={({ isActive, isPending }) =>
                        isPending
                            ? "menu__link menu__profile-link" : isActive
                                ? "menu__link menu__profile-link menu__link_active"
                                : "menu__link menu__profile-link"} to='/profile' onClick={onClose}>Аккаунт
                    </NavLink>
                </div>
                <button onClick={props.handleMenuOpen} className='menu__close-button' type='button' />
            </div>
        </div>
    )
}