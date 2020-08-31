import React from 'react';

import { BrowserRouter , Route} from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/about';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/About" component={About}/>
            <Route path="/Login" component={Landing}/>
            <Route path="/Register" component={Landing}/>
        </BrowserRouter>
    );
}

export default Routes;