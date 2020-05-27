import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Repositories from './pages/repositories/Repositories';
import Home from './pages/home/Home';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/Repositories' component={Repositories}/>
            </Switch>
        </BrowserRouter>        
    )
}

export default Routes;