import { useState } from 'react';

import { getUser, logout } from './services/userService';

import { getSearchData } from './services/petFinderService';

import Footer from './components/Footer';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import './App.css';



function App(props) {

  const [ userState, setUserState ] = useState({
    user: getUser()
  });


 async function getPetData(breed, limit) {
  try {
    const data = await getSearchData(breed, limit);
    console.log(data)
  } catch (error) {
    
  }
}


  function handleSignUpOrLogin() {
    setUserState({
      user: getUser()
    });
  }

  function handleLogout() {
    logout();

    setUserState({ user: null });

    props.history.push('/');
  }

  return (
    <div className="App">
      <Header handleLogout={handleLogout} user={userState.user} />
        <main>
          <Switch>
            <Route exact path="/" render={props => 
              <HomePage />
            } />
            <Route exact path="/dashboard" render={props => 
              userState.user ?
              <DashboardPage />
              :
              <Redirect to="/login" />
            } />
            <Route exact path="/signup" render={props => 
              <SignupPage {...props} 
              handleSignUpOrLogin={handleSignUpOrLogin} />
            } />
            <Route exact path="/login" render={props => 
              <LoginPage {...props} 
              handleSignUpOrLogin={handleSignUpOrLogin} />
            } />
          </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default withRouter(App);
