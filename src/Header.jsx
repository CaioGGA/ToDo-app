import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1>My Tasks</h1>
      <h2>Total tasks: {props.totalTasks}</h2>
    </div>
  );
}

export default Header;
