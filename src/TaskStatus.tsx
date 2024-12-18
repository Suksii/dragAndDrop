import { useDroppable } from "@dnd-kit/core";
import Card from "./Card";
import { TaskStatusProps } from "./types/types";

const TaskStatus = ({ tasks, status }: TaskStatusProps) => {
  const filteredTasks = tasks.filter((task) => task.status === status.title);

  const { setNodeRef } = useDroppable({
    id: status.title,
  });

  return (
    <div
      className="flex flex-col gap-4 min-w-80 w-full bg-gray-800 rounded-xl p-4"
      ref={setNodeRef}
    >
      <h2 className="text-neutral-100 text-2xl font-semibold">{status.title}</h2>
      <div className="flex flex-col gap-2">
        {filteredTasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;
