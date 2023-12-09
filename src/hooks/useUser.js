import { useState } from "react";

function getStoredUser() {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
}

function setStoredUser(user) {
  // set user in local storage
  localStorage.setItem("user", JSON.stringify(user));
}

function clearStoredUser() {
  localStorage.removeItem("user");
}

export function useUser() {
  const [user, setUser] = useState(getStoredUser());

  function updateUser(newUser) {
    console.log("update user");
    setStoredUser(newUser);
    setUser(newUser);
  }

  function clearUser() {
    setUser(null);
    clearStoredUser();
  }

  return { user, updateUser, clearUser };
}
