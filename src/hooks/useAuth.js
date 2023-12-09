import { useUser } from "../hooks/useUser";

export function useAuth() {
  const { clearUser, updateUser } = useUser();

  async function authServerCall(urlEndpoint, email, password) {
    updateUser({ email: "email", useId: "userId", token: "token" });
  }

  async function signin(email, password) {
    console.log("signin");
    authServerCall("/signin", email, password);
  }

  function signout() {
    console.log("signout");
    // clear user from stored user data
    clearUser();
  }

  // Return the user object and auth methods
  return {
    signin,
    signout,
  };
}
