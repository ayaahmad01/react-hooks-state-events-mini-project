import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: categories[0] // Set default category
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(newTask);
    setNewTask({
      text: "",
      category: categories[0]
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleChange}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;