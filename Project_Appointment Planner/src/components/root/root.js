import React from "react";
import { Outlet, NavLink } from "react-router-dom"
const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };
function Root() {
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS}>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS}>
          Appointments
        </NavLink>
      </nav>
      <main>
        <Outlet/>
      </main>
      
    </>
  )
}

export default Root;