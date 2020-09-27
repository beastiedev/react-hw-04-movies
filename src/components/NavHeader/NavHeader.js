import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const NavHeader = () => (
  <div className="nav-header">
    <ul>
      {routes.map(
        ({ path, isExact, label, isInMenu }) =>
          isInMenu && (
            <li key={path}>
              <NavLink exact={isExact} to={path} className="nav-link" activeClassName="active-nav-link">
                {label}
              </NavLink>
            </li>
          )
      )}
    </ul>
  </div>
);

export default NavHeader;
