import React from "react";
import "./users.css";

const User = (proms) => {
  return (
    <div className="user">
      <div
        className="userImg"
        style={{
          backgroundImage: `url("${
            proms.url ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }")`,
        }}
      ></div>
      <div className="user-info">
        <h2>{proms.name || "User Name"}</h2>
        <p>{proms.email || "User Email"}</p>
      </div>
    </div>
  );
};

export default User;
