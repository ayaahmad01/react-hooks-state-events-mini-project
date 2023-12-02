import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const handleDelete = (taskId) => {
    console.log("Delete task with id:", taskId);
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => handleDelete(task.id)} />
      ))}
    </div>
  );
}

export default TaskList;
