import React from 'react';

import { BrowserRouter , Route} from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/about';
import Manual from './pages/manual';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/Login" component={Landing}/>
            <Route path="/About" component={About}/>
            <Route path="/Manual" component={Manual}/>
        </BrowserRouter>
    );
}

export default Routes;