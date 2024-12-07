import { useState } from "react";
import "./App.css";
import TaskStatus from "./TaskStatus";
import { TaskStatusType, TaskType } from "./types/types";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

function App() {
  const taskStatus: TaskStatusType[] = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Done" },
  ];

  const initialTasks: TaskType[] = [
    { id: 1, title: "Title 1", description: "Description 1", status: "Done" },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      status: "In Progress",
    },
    { id: 3, title: "Title 3", description: "Description 3", status: "To Do" },
    {
      id: 4,
      title: "Title 4",
      description: "Description 4",
      status: "In Progress",
    },
  ];

  const [tasks, setTasks] = useState<TaskType[]>(initialTasks);

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over) return;

    const taskId = active.id as number;
    const newStatus = over.id as TaskType["status"];

    console.log("TaskId: ", taskId);
    console.log("newStatus: ", newStatus);

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
        <DndContext onDragEnd={handleDragEnd}>
          {taskStatus.map((status) => {
            return <TaskStatus key={status.id} tasks={tasks} status={status} />;
          })}
        </DndContext>
      </div>
    </div>
  );
}

export default App;
