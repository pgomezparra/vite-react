import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function Profile() {
  const { user } = useAuth0();

  return (
    <div className="image-text">
      <span className="image">
        <img src={user.picture} alt={user.name} />
      </span>

      <div className="text header-text">
        <span className="name">{user.name}</span>
        <span className="user-email">{user.email}</span>
      </div>
    </div>
  );
}
