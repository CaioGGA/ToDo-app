import React, { useState } from "react";

function ToDo(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    if (isDone === false) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  }
  function testEdit() {
    return <input type="text" />;
  }
  return (
    <div className="task">
      <p
        onClick={handleClick}
        style={{
          textDecoration: isDone ? "line-through" : null,
          opacity: isDone ? "0.33" : null,
        }}
      >
        {props.taskName}
      </p>
      <button
        type="button"
        className="toDoButtons"
        onClick={() => {
          props.delete(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ToDo;
