import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';

import HomePage from './pages/homepage/HomePage.jsx';
import ShopPage from './pages/shop/ShopPage';
import Sign from './pages/sign/Sign';
import CheckOut from './pages/checkout/CheckOut';

import { auth, createUserProfileDocument } from './firebase/Firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './store/user/userActions'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './store/user/userSelectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.props.setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOut} />
          <Route exact path='/sign' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<Sign />)} />
        </Switch>
      </div >
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

//The first argumant(mapStateToProps) is to get current user and the second argumant is to dispatch. 
export default connect(mapStateToProps, mapDispatchToProps)(App);
