import React from 'react';
import { NavLink } from "react-router-dom";

export default function NotFound()  {
  return (
    <div className="header">
      <h2>Page not found 404</h2>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
    </div>
  );
};