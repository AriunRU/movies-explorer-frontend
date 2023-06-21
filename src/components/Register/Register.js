import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <form name="register__form" className="register__form">
        <div className="register__inputs">
          <Link className="register__logo" to="/"><img className="register__logo" src={logo} alt="Movies Explorer" /></Link>
          <h2 className="register__title">Добро пожаловать!</h2>
          <label for="name-field" className="register__lable">Имя</label>
          <input
            type="text"
            id="name-field"
            className="register__field"
            minLength="2"
            maxLength="30"
            required
            name="name"
          />
          <span className="name-field-error register__span"></span>
          <label for="email-field" className="register__lable">E-mail</label>
          <input
            type="email"
            id="email-field"
            className="register__field"
            minLength="2"
            maxLength="40"
            required
            name="email"/>
          <span className="email-field-error register__span"></span>
          <label for="password-field" className="register__lable">Пароль</label>
          <input
            type="password"
            id="password-field"
            className="register__field password-register__field"
            minLength="2"
            maxLength="30"
            required
            name="password"
          />
          <span className="password-field-error register__span">Что-то пошло не так...</span>
        </div>
        <button type="submit" className="register__submit" name="submit" defaultValue="Зарегистрироваться">Зарегистрироваться</button>
      </form>
      <div className="register__bottom">
        <h2 className="register__text">Уже зарегистрированы?</h2>
        <Link to="/signin" className="register__text register__link">Войти</Link>
      </div>
    </section>
  );
}

export default Register;
