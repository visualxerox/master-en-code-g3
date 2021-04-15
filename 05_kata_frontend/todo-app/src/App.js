import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HolaMundoClass from './components/HolaMundoClass';
import HolaMundo from './components/HolaMundo';

import './App.css';
import CicloDeVida from './components/CicloDeVida';
import Characters from './components/Characters';

const NotFound = () => {
  return <h2> Not Found </h2>
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
             <HolaMundo texto="Hola soy un stateless component"/>
            </Route>
            <Route exact path="/class" component={HolaMundoClass}/>
            <Route exact path="/notFound" render={() => <NotFound/>} />
            <Route exact path="/lifeCycle" component={CicloDeVida} />
            <Route exact path="/characters" component={Characters} />

            <Redirect push to="/notFound" />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;