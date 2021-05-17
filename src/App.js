import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import { ROUTES } from './routes/routes';

import './styles/App.scss';

const App = () => {
  return (
    <div className='App-container body'>
      <Header />
      <Switch>
        <Route path={ROUTES.LOGIN}>
          <Login />
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
