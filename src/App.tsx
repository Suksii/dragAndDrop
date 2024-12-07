import { useState } from "react";
import "./App.css";
import TaskStatus from "./TaskStatus";
import { TaskStatusType, TaskType } from "./types/types";

function App() {
  const taskStatus: TaskStatusType[] = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Done" },
  ];

  const initialTasks: TaskType[] = [
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
      <h1 className="text-center text-gray-50 text-3xl font-semibold pb-10">
        Drag&Drop Tasks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-fit">
        {taskStatus.map((status) => {
          return <TaskStatus key={status.id} tasks={tasks} status={status} />;
        })}
      </div>
    </div>
  );
}

export default App;
