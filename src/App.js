import React from 'react';

import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import RouterTop from './component/routerTop';

//Get guest pages
import { home,
         cart
} from './view/index'

function App() {
  return (
      <Router>
        <RouterTop/>
          <Switch>
            <Route exact path={'/'} component={home} />
             <Route path={'/cart'} component={cart}/>
          </Switch>
      </Router>
  );
}

export default App;
