import { lazy } from 'react';
import MoviesPage from './components/MoviesPage/MoviesPage';

const Home = lazy(() => import('./components/HomePage/HomePage' /* webpackChunkName: "home-page" */));
const MovieDetails = lazy(() =>
  import('./components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */)
);
// const Movies = lazy(() => import('./components/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */));

const routes = [
  {
    path: '/',
    label: 'Home',
    isExact: true,
    isInMenu: true,
    component: Home
  },
  {
    path: '/movies',
    label: 'Movies',
    isExact: true,
    isInMenu: true,
    component: MoviesPage
  },
  {
    path: '/movies/:movieId',
    label: 'Movie',
    isExact: false,
    isInMenu: false,
    component: MovieDetails
  }
];

export default routes;
