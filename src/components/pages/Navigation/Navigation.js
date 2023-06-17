import React from "react";
import Header from "../../Header/HeaderMain/HeaderMain";
import Main from "../../Main/Main";
import Footer from "../../Footer/Footer";

function Navigation(props) {
  const { loggedIn, isMenuOpen, handleMenuOpen, goToProfile, goToLogin, margin } =
    props;
  return (
    <>
      <Header
        loggedIn={loggedIn}
        isMenuOpen={isMenuOpen}
        handleMenuOpen={handleMenuOpen}
        goToProfile={goToProfile}
        goToLogin={goToLogin}
        margin={margin}/>
      <Main/>
      <Footer />
    </>
  );
}

export default Navigation;
