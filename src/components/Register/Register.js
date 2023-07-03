import { UseFormValidation } from '../../hooks/UseFormValidation';
import { InfoMessage } from '../InfoMessage/InfoMessage';
import { NavLink } from 'react-router-dom';

export function Register(props) {
    const { values, errors, isValid, handleChange, resetForm } = UseFormValidation({});

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleRegistration(values.name, values.email, values.password);
        resetForm();
    }
    return (
        <section className='register'>
            <NavLink className='register__logo' to='/' />
            <h2 className='register__header'>Добро пожаловать!</h2>
            <form name='register__form' className='register__form form'>
                <label className='register__input-box'>
                    <span className='register__input-name'>Имя</span>
                    <input value={values.name || ''} onChange={handleChange} name='name' id='name'
                        className={errors.name ? 'register__input register__input_error' : 'register__input'}
                        type='text' placeholder='Имя' minLength={2} maxLength={30} pattern="^(?!\s)[A-Za-zА-Яа-я\-\s]+$" required />
                    <span className={errors.name ? "register__error register__error_visible" : "register__error"}>{errors.name}</span>
                </label>
                <label className='register__input-box'>
                    <span className='register__input-name'>E-mail</span>
                    <input value={values.email || ''} onChange={handleChange} name='email' id='email'
                        className={errors.email ? 'register__input register__input_error' : 'register__input'}
                        type='email' placeholder='E-mail' minLength={2} maxLength={30} pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" required />
                    <span className={errors.email ? "register__error register__error_visible" : "register__error"}>{errors.email}</span>
                </label>
                <label className='register__input-box'>
                    <span className='register__input-name'>Пароль</span>
                    <input value={values.password || ''} onChange={handleChange} name='password' id='password'
                        className={errors.password ? 'register__input register__input_error' : 'register__input'}
                        type='password' placeholder='Пароль' minLength={8} maxLength={30} required />
                    <span className={errors.password ? "register__error register__error_visible" : "register__error"}>{errors.password}</span>
                </label>
            </form>
            <InfoMessage isInfoMessageOpen={props.isInfoMessageOpen} closeInfoMessage={props.closeInfoMessage} textIfnoMessage={props.textIfnoMessage} />
            <button onClick={handleSubmit} disabled={!isValid && props.isLoading} type='submit' form='register__form'
                className={isValid ? "register__submit-button" : "register__submit-button register__submit-button_disabled"}>Зарегистрироваться</button>
            <div className="register__signin">
                <p className="register__signin-text">Уже зарегистрированы?</p>
                <NavLink to="/sign-in" className="register__signin-link">Войти</NavLink>
            </div>
        </section>
    )
}