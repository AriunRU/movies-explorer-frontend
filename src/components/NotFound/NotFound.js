import { NavLink } from 'react-router-dom'

export function NotFound() {
    return (
        <section className='not-found'>
            <h2 className='not-found__title'>404</h2>
            <p className='not-found__subtitle'>Страница не найдена</p>
            <NavLink to='/' className='not-found__link'>Назад </NavLink>
        </section>
    )
}