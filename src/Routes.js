import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Signin from './components/Auth/Signin';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Bookmark from './components/Bookmark/Bookmark';
import PrivateRoute from './components/Routes/PrivateRoute';

const history = createBrowserHistory();

const Routes = () => {

    return (
        <Router history={history} >
        {/* <Router> */}
            <Switch>
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path="/bookmark" component={Bookmark} />
                <PrivateRoute exact path="/files" component={Signin} />
                <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
        </Router>
    )
}

export default Routes