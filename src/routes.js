import HomePage from './components/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage';
import MoviesPage from './components/MoviesPage';

const routes = [
  {
    path: '/',
    label: 'Home',
    isExact: true,
    isInMenu: true,
    component: HomePage,
  },
  {
    path: '/movies',
    label: 'Movies',
    isExact: true,
    isInMenu: true,
    component: MoviesPage,
  },
  {
    path: '/movies/:movieId',
    label: 'Movie',
    isExact: false,
    isInMenu: false,
    component: MovieDetailsPage,
  },
];

export default routes;
