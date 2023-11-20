import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <h1 className="bg-slate-500 p-3 m-3">Not logged in</h1>;
  }
  return (
    <div>
      <h1 className="bg-slate-500 p-3 m-3">
        Profile : {user.username}
        </h1>
    </div>
  );
}

export default Profile;
