import { UseFormValidation } from '../../hooks/UseFormValidation';
import { InfoMessage } from '../InfoMessage/InfoMessage';
import { NavLink } from 'react-router-dom';

export function Login(props) {
    const { values, errors, isValid, handleChange } = UseFormValidation({});

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleLogin(values.email, values.password);
    }
    return (
        <section className='login'>
            <NavLink className='login__logo' to='/' />
            <h2 className='login__header'>Рады видеть!</h2>
            <form name='login__form' className='login__form form'>
                <label className='login__input-box'>
                    <span className='login__input-name'>E-mail</span>
                    <input value={values.email || ''} onChange={handleChange} name='email'
                        id='email' className={errors.email ? 'login__input login__input_error' : 'login__input'}
                        type='email' placeholder='E-mail' minLength={2} maxLength={30} pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" required />
                    <span className={errors.email ? "login__error login__error_visible" : "login__error"}>{errors.email}</span>
                </label>
                <label className='login__input-box'>
                    <span className='login__input-name'>Пароль</span>
                    <input value={values.password || ''} onChange={handleChange} name='password'
                        id='password' className={errors.password ? 'login__input login__input_error' : 'login__input'}
                        type='password' placeholder='Пароль' minLength={8} maxLength={30} required />
                    <span className={errors.password ? "login__error login__error_visible" : "login__error"}>{errors.password}</span>
                </label>
            </form>
            <InfoMessage isInfoMessageOpen={props.isInfoMessageOpen} closeInfoMessage={props.closeInfoMessage} textIfnoMessage={props.textIfnoMessage} />
            <button disabled={!isValid && props.isLoading} onClick={handleSubmit}
                form='login__form' type='submit' className={isValid ? "login__submit-button"
                    : "login__submit-button login__submit-button_disabled"}>Войти</button>
            <div className="login__signin">
                <p className="login__signin-text">Ещё не зарегистрированы?</p>
                <NavLink to="/sign-up" className="login__signin-link">Регистрация</NavLink>
            </div>
        </section>
    )
}