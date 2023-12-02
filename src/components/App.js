import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy rice', category: 'Food' },
    { id: 2, text: 'Save a tenner', category: 'Money' },
    { id: 3, text: 'Build a todo app', category: 'Code' },
    { id: 4, text: 'Build todo API', category: 'Code' },
    { id: 5, text: 'Get an ISA', category: 'Money' },
    { id: 6, text: 'Cook rice', category: 'Food' },
    { id: 7, text: 'Tidy house', category: 'Misc' }
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    console.log(`Delete task with id: ${taskId}`);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };

  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={["All", "Code", "Food", "Money", "Misc"]}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
      <NewTaskForm categories={["Code", "Food", "Money", "Misc"]} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
}

export default App;
