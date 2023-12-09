import React from "react";
import { useUser } from "../hooks/useUser";
import { useAuth } from "../hooks/useAuth";

export default function Signin() {
  // every component use any hooke has it's hook for it only mean if any change happen to user will not re-render another component that has this hook because this useUser hook nonfasel 3n ela5aren
  // any change will happen to user will re-render this component only
  // if we wnat to re-render all component that use user from useUser so we need to provider like redux or context
  // updateUser will change user and will make re-render this component because updateUser change user of this component and user (state of this component) and updateUser come from same hook (useUser hook) so updateUser change in state of this component (user)
  // but signin will call updateUser inside it and then user will change but this component will no re-render because useAuth use useUser and siginin change user of useAuth not change user of this component so user of thes compoennt that come from useUSer منفصل عن ال user that siginin changed
  const { user, updateUser } = useUser();
  const { signin } = useAuth();

  return (
    <>
      <div>Sign in {user ? user.email : "no user"} </div>
      <div>
        {/* when run updateUser function will change in user (state of this compoentn that come from useUser) and will truthy and this component will re-render */}
        <button onClick={() => updateUser({ email: "email2" })}>
          changeUser
        </button>
        {/* when run signin function user will change in user (user of useAuth hook not user of this component [state of this component]) and this component will not re-render */}
        <button onClick={() => signin()}>siginin</button>
      </div>
    </>
  );
}
