import React, { useState } from "react";

function FormTask(props) {
  const [inputTask, setInputTask] = useState("");
  function handleChange(e) {
    setInputTask(e.target.value);
  }
  return (
    <div className="form-container">
      <form>
        <input
          type="text"
          onChange={handleChange}
          value={inputTask}
          className="formTask"
        />
        <button
          type="button"
          onClick={() => {
            props.addTask(inputTask);
            setInputTask("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default FormTask;
