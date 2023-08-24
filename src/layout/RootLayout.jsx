import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';

function RootLayout() {
  return (
    <>
      <header className=" bg-secondary py-3">
        <Navbar />
        {/* <ul>
            <NavLink to="">
              <li>Main</li>
            </NavLink>
            <NavLink to="/login">
              <li>Login</li>
            </NavLink>
            <NavLink to="/register">
              <li>Register</li>
            </NavLink>
          </ul> */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default RootLayout