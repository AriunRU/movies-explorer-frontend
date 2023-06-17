import React from "react";
import Header from "../../Header/HeaderMain/HeaderMain";
import Footer from "../../Footer/Footer";
import SearchForm from "../../Movies/SearchForm/SearchForm";
import MoviesCardList from "../../Movies/MoviesCardList/MoviesCardList";
import ButtonMore from "../../Buttons/ButtonMore/ButtonMore";
import BurgerMenu from "../../Burger/BurgerMenu/BurgerMenu";

function Movies(props) {
  const {
    loggedIn,
    isMenuOpen,
    handleMenuOpen,
    goToProfile,
    goToLogin,
    margin,
  } = props;
  return (
    <>
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        handleMenuOpen={handleMenuOpen}
        goToProfile={goToProfile}
      />
      <Header
        loggedIn={loggedIn}
        isMenuOpen={isMenuOpen}
        handleMenuOpen={handleMenuOpen}
        goToProfile={goToProfile}
        goToLogin={goToLogin}
        margin={margin}
      />
      <main className="movies">
        <SearchForm />
        <MoviesCardList page="movies" />
        <ButtonMore />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
