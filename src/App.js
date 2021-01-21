import { useState, useEffect } from 'react';

import { getUser, logout } from './services/userService';

import { getSearchData } from './services/petFinderService';

import styled from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';

import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import './App.css';


function App(props) {
  
  const StyledLayout = styled.div`
    display" flex;
    min-height: 100vh;
    flex-direction: column;
    main {
      flex-grow: 1;
    }
  `;


  const [ userState, setUserState ] = useState({
    user: getUser()
  });


 async function getPetData(breed, limit) {
  try {
    const data = await getSearchData(breed, limit);
    // setUserState(data);
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}

  useEffect(function() {
    getPetData();
    console.log('useEffect Called - Component mounted or updated');
  }, []);


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
    <StyledLayout>

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
            <Route exact path="/animals" 
            render={props => 
            <DetailPage {...props} />} 
            />
            <Route exact path="/animals/:id" 
            render={props => 
            <DetailPage {...props} />} 
            />
          <Search />
          </Switch>
        </main>
      <Footer />
    </div>

    </StyledLayout>
  );
}

export default withRouter(App);
