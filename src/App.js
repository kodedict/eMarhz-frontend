import React from 'react';

import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import RouterTop from './component/routerTop';

//Get guest pages
import { home } from './view/index'

function App() {
  return (
      <Router>
        <RouterTop/>
          <Switch>
            <Route exact path={'/'} component={home} />
          </Switch>
      </Router>
  );
}

export default App;
