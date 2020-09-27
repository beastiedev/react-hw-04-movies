import React, { lazy, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Context from '../MoviesDetailsPageContext';

const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "cast-page" */));
const Reviews = lazy(() => import('./Reviews/Reviews' /* webpackChunkName: "reviews-page" */));

const AdditionalInfo = () => {
  const { url } = useContext(Context);

  return (
    <Context.Consumer>
      {() => {
        return (
          <Switch>
            <Route path={`${url}/cast`} component={Cast} exact />
            <Route path={`${url}/reviews`} component={Reviews} exact />
            <Redirect to={url} />
          </Switch>
        );
      }}
    </Context.Consumer>
  );
};

export default AdditionalInfo;
