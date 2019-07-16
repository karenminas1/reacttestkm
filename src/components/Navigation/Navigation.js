import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../routes';

const Navigation = () => (
  <div>
    <ul>
        { routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{ route.name }</Link>
          </li>
        ))}
    </ul>
  </div>
);

export default Navigation;