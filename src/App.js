import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage.jsx';
import ShopPage from './pages/shop/ShopPage';
import Sign from './pages/sign/Sign';
import { auth, createUserProfileDocument } from './firebase/Firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './store/user/userActions'

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
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' component={Sign} />
        </Switch>
      </div >
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

//The first argumant(null) of the connect is state. It is null because App doesn't need any props from reducer like currentUser.
export default connect(null, mapDispatchToProps)(App);
