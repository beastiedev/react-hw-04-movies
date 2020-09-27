import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../routes';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          {routes.map(({ path, isExact, component }) => {
            return <Route key={path} path={path} component={component} exact={isExact} />;
          })}
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Content;
