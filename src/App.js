import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage.jsx';
import ShopPage from './pages/shop/ShopPage';
import Sign from './pages/sign/Sign';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign' component={Sign} />
      </Switch>
    </div>
  );
}

export default App;
