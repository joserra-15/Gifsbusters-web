import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import Spinner from './components/Spinner';
import Gif from './pages/Gif';
import Home from './pages/Home';
import Login from './pages/Login';
import Media from './pages/Media';
import Meme from './pages/Meme';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import Search from './pages/Search';
import Upload from './pages/Upload';
import { signOut, syncSignIn } from './redux/auth/auth-actions';
import { authSelector } from './redux/auth/auth-selector';
import { ROUTES } from './routes/routes';
import { onAuthStateChanged } from './services/auth';
import { ToastContainer } from 'react-toastify';

import './styles/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import User from './pages/User';

const App = () => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector(authSelector);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = onAuthStateChanged(user => {
      if (user) {
        dispatch(syncSignIn());
      } else {
        dispatch(signOut());
      }
      setIsLoading(false);
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, [dispatch, setIsLoading]);
  return (
    <div className='App-container body'>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <Switch>
          <PublicRoute isAuthenticated={isAuthenticated} path={ROUTES.LOGIN}>
            <Login />
          </PublicRoute>

          <PublicRoute isAuthenticated={isAuthenticated} path={ROUTES.REGISTER}>
            <Register />
          </PublicRoute>

          <PublicRoute
            isAuthenticated={isAuthenticated}
            path={ROUTES.RESET_PASSWORD}>
            <ResetPassword />
          </PublicRoute>

          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path={ROUTES.UPLOAD}>
            <Upload />
          </ProtectedRoute>

          <Route path={ROUTES.SEARCH}>
            <Search />
          </Route>

          <Route path={ROUTES.USER}>
            <User />
          </Route>

          <Route path={ROUTES.MEDIA}>
            <Media />
          </Route>

          <Route path={ROUTES.MEME}>
            <Meme />
          </Route>

          <Route path={ROUTES.GIF}>
            <Gif />
          </Route>

          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
      )}
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        progressClassName='progress-bar'
      />
    </div>
  );
};

export default App;
