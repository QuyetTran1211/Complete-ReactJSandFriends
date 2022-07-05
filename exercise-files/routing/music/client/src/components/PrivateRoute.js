import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { client } from '../Client';

const PrivateRoute = ({component, ...rest}) => (
  <Route {...rest} render={(props) => (
    client.isLoggedIn() ? (
    // render the component
    React.createElement(component, props)
    ) : (
    // render the redirect
    <Redirect to={{
      pathname: 'login',
      state: { from: props.location},
    }} />
    )
    )} />
    );
export default PrivateRoute;
