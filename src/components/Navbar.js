import React from "react";
import { useUser } from "../hooks/useUser";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user } = useUser();
  const { signout, signin } = useAuth();

  return (
    <>
      <div>
        NavBar{" "}
        {user ? (
          <button onClick={() => signout()}>sign out</button>
        ) : (
          <button onClick={() => signin()}>sign in</button>
        )}
      </div>
    </>
  );
}
