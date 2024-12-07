import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const taskStatus = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Done" },
  ];

  const initialTasks = [
    { id: 1, title: "Title 1", description: "Description 1", status: "Done" },
    {
      id: 1,
      title: "Title 2",
      description: "Description 2",
      status: "In Progress",
    },
    { id: 1, title: "Title 3", description: "Description 3", status: "To Do" },
    {
      id: 1,
      title: "Title 4",
      description: "Description 4",
      status: "In Progress",
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="bg-gray-900 h-[100vh] w-full p-8">
      <div className="flex justify-between gap-6 items-center h-full">
        {tasks.map((item) => {
          return <Card title={item.title} description={item.description} />;
        })}
      </div>
    </div>
  );
}

export default App;
