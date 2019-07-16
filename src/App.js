import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation/Navigation';

import { routes } from './routes';

function App() {
  return (
    <div className="App">
        <Router>
          <Navigation />

          <hr/>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Router>
    </div>
  );
}

export default App;
