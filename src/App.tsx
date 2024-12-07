import { useState } from "react";
import "./App.css";
import TaskStatus from "./TaskStatus";
import { TaskStatusType, TaskType } from "./types/types";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

function App() {
  const taskStatus: TaskStatusType[] = [
    { id: 1, title: "Done" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "To Do" },
  ];

  const initialTasks: TaskType[] = [
    {
      id: 1,
      title: "Implement Authentication",
      description:
        "Add user login, registration and authentification functionality.",
      status: "Done",
    },
    {
      id: 2,
      title: "Design Database Schema",
      description: "Create MongoDB schema for storing data.",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Create and develop API endpoints",
      description: "Implement REST API endpoints for fetching data.",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Optimize Application Performance",
      description: "Refactor code to improve performance.",
      status: "To Do",
    },
    {
      id: 5,
      title: "Deploy Application",
      description:
        "Deploy the application to production environment and test functionality.",
      status: "To Do",
    },
  ];

  const [tasks, setTasks] = useState<TaskType[]>(initialTasks);

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over) return;

    const taskId = active.id as number;
    const newStatus = over.id as TaskType["status"];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen w-full p-8">
      <h1 className="text-center text-gray-50 text-3xl font-semibold pb-10">
        Drag&Drop Tasks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-fit">
        <DndContext
          onDragEnd={handleDragEnd}
          modifiers={[restrictToWindowEdges]}
        >
          {taskStatus.map((status) => {
            return <TaskStatus key={status.id} tasks={tasks} status={status} />;
          })}
        </DndContext>
      </div>
    </div>
  );
}

export default App;
