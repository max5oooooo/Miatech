import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// Componente Layout
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to={"/Home"}>Home</Link></li>
          <li><Link to={"/About"}>About</Link></li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout