import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import Spinner from './components/Spinner';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import Upload from './pages/Upload';
import { signOut, syncSignIn } from './redux/auth/auth-actions';
import { authSelector } from './redux/auth/auth-selector';
import { ROUTES } from './routes/routes';
import { onAuthStateChanged } from './services/auth';

import './styles/App.scss';

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

          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default App;
