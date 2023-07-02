import { BlockPage } from '../BlockPage/BlockPage';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';
import * as myApi from '../../utils/myApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { ProtectedRouteElement } from '../ProtectedRoute';

function App() {
  const navigation = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoMessageOpen, setIsInfoMessageOpen] = useState(false);
  const [textIfnoMessage, setTextInfoMessage] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleTokenCheck();
  }, [])

  useEffect(() => {
    if (loggedIn) {
      myApi.getSavedMovies()
        .then((movies) => {
          const mySavedMovies = movies.filter((movie) => movie.owner === currentUser._id);
          setSavedMovies(mySavedMovies);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [currentUser._id, setSavedMovies]);

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      myApi.checkToken(jwt).then(res => {
        setLoggedIn(true);
        setCurrentUser(res);
        if (pathname === '/sign-in' || pathname === '/sign-up') {
          navigation('/movies', { replace: true });
        } else {
          navigation(`${pathname}`, { replace: true });
        }
      })
        .catch((err) => console.log(err));
    }
  }

  function handleRegistration(name, email, password) {
    setIsLoading(true);
    myApi.register(name, email, password)
      .then((res) => {
        setLoggedIn(true);
        navigation('/movies', { replace: true });
        handleLogin(email, password);
      })
      .catch(err => {
        setIsInfoMessageOpen(true);
        setTextInfoMessage("Что-то пошло не так.")
      })
      .finally(() => setIsLoading(false))
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    myApi.authorize(email, password)
      .then((data) => {
        navigation('/sign-in', { replace: true });
      })
      .then(() => {
        handleTokenCheck()
      })
      .catch((err) => {
        setIsInfoMessageOpen(true);
        setTextInfoMessage("Неверно введены почта или пароль.")
      })
      .finally(() => setIsLoading(false))
  }

  function handleChangeProfile(name, email) {
    setIsLoading(true);
    myApi.changeProfile(name, email)
      .then((data) => {
        setCurrentUser(data);
        setIsInfoMessageOpen(true);
        setTextInfoMessage("Данные успешно обновлены!")
      })
      .catch((err) => {
        setIsInfoMessageOpen(true);
        setTextInfoMessage("Произошла серверная ошибка")
      })
      .finally(() => setIsLoading(false))
  }

  function handleExit() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    navigation('/', { replace: true });
    localStorage.removeItem('allMovies');
    localStorage.removeItem('allData');
    setSavedMovies([]);
  }

  function closeInfoMessage() {
    setIsInfoMessageOpen(false);
    setTextInfoMessage('')
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <BlockPage loggedIn={loggedIn}>
              <Main />
            </BlockPage>
          } />
          <Route path='/movies' element={<ProtectedRouteElement
            element={Movies}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            setIsInfoMessageOpen={setIsInfoMessageOpen}
            setTextInfoMessage={setTextInfoMessage}
            isInfoMessageOpen={isInfoMessageOpen}
            closeInfoMessage={closeInfoMessage}
            textIfnoMessage={textIfnoMessage} />} />
          <Route path='/saved-movies' element={<ProtectedRouteElement
            element={SavedMovies}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            setIsInfoMessageOpen={setIsInfoMessageOpen}
            setTextInfoMessage={setTextInfoMessage}
            isInfoMessageOpen={isInfoMessageOpen}
            closeInfoMessage={closeInfoMessage}
            textIfnoMessage={textIfnoMessage} />} />
          <Route path='/profile' element={<ProtectedRouteElement
            element={Profile}
            handleExit={handleExit}
            handleChangeProfile={handleChangeProfile}
            loggedIn={loggedIn}
            isInfoMessageOpen={isInfoMessageOpen}
            closeInfoMessage={closeInfoMessage}
            textIfnoMessage={textIfnoMessage}
            isLoading={isLoading} />} />
          <Route path='/sign-up' element={<Register handleRegistration={handleRegistration} isInfoMessageOpen={isInfoMessageOpen} closeInfoMessage={closeInfoMessage} textIfnoMessage={textIfnoMessage} isLoading={isLoading} />} />
          <Route path='/sign-in' element={<Login handleLogin={handleLogin} isInfoMessageOpen={isInfoMessageOpen} closeInfoMessage={closeInfoMessage} textIfnoMessage={textIfnoMessage} isLoading={isLoading} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
