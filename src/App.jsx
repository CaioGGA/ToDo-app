import Header from "./Header";
import ToDo from "./ToDo";
import FormTask from "./FormTask";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const response = await axios.get("http://localhost:3000/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function addTask(newTask) {
    try {
      const response = await axios.post("http://localhost:3000/tasks", {
        task: newTask,
      });
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTask(id) {
    const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
    console.log(response);

    setTasks(response.data);
  }

  return (
    <div>
      <Header totalTasks={tasks.length} />
      <FormTask addTask={addTask} />
      <div className="container">
        {tasks.length === 0 ? (
          <p className="message">You don't have any tasks yet.</p>
        ) : (
          tasks.map((task, index) => (
            <ToDo
              key={index}
              id={index}
              delete={deleteTask}
              taskName={task.task}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
