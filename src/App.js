import { useState, useEffect } from 'react';

import { getUser, logout } from './services/userService';

import { getSearchData } from './services/petFinderService';

import styled from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import AnimalCard from './components/AnimalCard';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import IndexPage from './pages/IndexPage';

import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import { AnimalData } from '@petfinder/petfinder-js/dist/api/animalData';

const StyledLayout = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  main {
    flex-grow: 1;
  }
`;


function App(props) {


  const [ userState, setUserState ] = useState({
    user: getUser(),
  });

  const [ animalState, setAnimalState ] = useState({
    animals: []
  })


 async function getPetData(breed, limit) {
  try {
    const { data } = await getSearchData(breed, limit);
    console.log(data)
    setAnimalState({ animals: data.animals })
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
              <HomePage {...props} />
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
            { animalState.animals.length > 0 && <Route exact path="/animals" 
            render={props => 
            <IndexPage {...props} animals={animalState.animals}/>} 
            />}
            <Route exact path="/animals/:id" render={props => {
            if(!props.location.query) {
            props.location.query.animal = animalState.animals[props.match.params.id];
            }
            return <DetailPage {...props} />
            }} />
            {/* // <Route exact path="/animals/:id"  */}
            {/* // render={props =>  */}
            {/* // <DetailPage {...props} />}  */}
            {/* // /> */}
          </Switch>
        </main>
      <Footer />
    </div>

    </StyledLayout>
  );
}

export default withRouter(App);
