import React from "react";

//will probably use a styled component for this

function Friend({ details }) {
  if (!details) {
    return <h3>Finding Your Friends</h3>;
  }

  return (
    <div>
      <h2>Name: {details.username}</h2>
      <p>Email: {details.email}</p>
    </div>
  );
}

export default Friend;
