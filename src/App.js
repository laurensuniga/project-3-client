import Footer from './components/Footer';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

import { Switch, Route } from 'react-router-dom';

import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Switch>
            <Route exact path="/" render={props => 
              <HomePage />
            } />
            <Route exact path="/dashboard" render={props => 
              <DashboardPage />
            } />
            <Route exact path="/signup" render={props => 
              <SignupPage {...props} />
            } />
            <Route exact path="/login" render={props => 
              <LoginPage {...props}/>
            } />
          </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default App;
