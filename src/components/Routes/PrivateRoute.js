import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../services/Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const currentUser = isLoggedIn();

    return (
        <Route {...rest} render={
            routeProps =>
                !!currentUser ? <RouteComponent {...routeProps} /> : <Redirect to={"/signin"} />}>

        </Route>)
}

export default PrivateRoute;