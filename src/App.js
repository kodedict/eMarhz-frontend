import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";

//import pages
import {
    Home,
    Cart
} from './view/';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path={'/'} component={Home} />
              <Route path={'/cart'} component={Cart} />
          </Switch>
      </Router>
  );
}

export default App;
