import React, { useState } from 'react'
import { UseFormValidation } from '../../hooks/UseFormValidation';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { InfoMessage } from '../InfoMessage/InfoMessage';

export function Profile(props) {
    const { values, errors, isValid, handleChange } = UseFormValidation({});
    const [isEditMode, setIsEditMode] = useState(false);
    const currentUser = React.useContext(CurrentUserContext);
    function handleEditMode() {
        setIsEditMode(!isEditMode);
        values.name = currentUser.name;
        values.email = currentUser.email;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditMode(!isEditMode);
        props.handleChangeProfile(values.name, values.email);
    }
    return (
        <section className='profile'>
            <h2 className='profile__greetings'>Привет, {currentUser.name}!</h2>
            <form name='profile__form' className='profile__form form'>
                <label className='profile__input-box'>
                    <span className='profile__input-name'>Имя</span>
                    <input value={values.name || ''} onChange={handleChange} disabled={!isEditMode}
                        name='name' id='name' className={errors.name ? 'profile__input profile__input_error' : 'profile__input'}
                        type='text' placeholder={currentUser.name} minLength={2} maxLength={30} pattern="^(?!\s)[A-Za-zА-Яа-я\-\s]+$" required />
                    <span className={errors.name ? "profile__error profile__error_visible" : "profile__error"}>{errors.name}</span>
                </label>
                <label className='profile__input-box'>
                    <span className='profile__input-name'>E-mail</span>
                    <input value={values.email || ''} onChange={handleChange} disabled={!isEditMode}
                        name='email' id='email' className={errors.name ? 'profile__input profile__input_error' : 'profile__input'}
                        type='email' placeholder={currentUser.email} minLength={2} maxLength={30} pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" required />
                    <span className={errors.email ? "profile__error profile__error_visible" : "profile__error"}>{errors.email}</span>
                </label>
            </form>
            <div className='profile__options'>
                <InfoMessage isInfoMessageOpen={props.isInfoMessageOpen} closeInfoMessage={props.closeInfoMessage} textIfnoMessage={props.textIfnoMessage} />
                {isEditMode
                    ? <button disabled={!isValid && (values.name === currentUser.name || values.email === currentUser.email)
                        && props.isLoading} onClick={handleSubmit} type='submit' form='profile__form'
                        className={isValid && (values.name !== currentUser.name || values.email !== currentUser.email)
                            ? 'profile__submit-button' : 'profile__submit-button profile__submit-button_disabled'}>Сохранить</button>
                    : <button onClick={handleEditMode} type='button' className='profile__submit-button'>Редактировать</button>
                }
                <button onClick={props.handleExit} type='button' className='profile__exit-button'>Выйти из аккаунта</button>
            </div>
        </section >
    )
}