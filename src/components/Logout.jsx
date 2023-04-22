import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <li className="">
      <Link
        className="link-menu"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        <i className="bx bx-log-out icon"></i>
        <span className="text nav-text">Logout</span>
      </Link>
    </li>
  );
}
