import { useState } from "react";
import { TaskProps } from "./types/types";
import { useDraggable } from "@dnd-kit/core";

const Card = ({ task }: TaskProps) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`min-w-44 w-full h-fit shadow-lg bg-gray-700 rounded-xl p-6 ${
        isGrabbing ? "cursor-grabbing" : "cursor-grab"
      } `}
      style={style}
      onMouseUp={() => setIsGrabbing(false)}
      onMouseDown={() => setIsGrabbing(true)}
      onPointerUp={() => setIsGrabbing(false)}
    >
      <h1 className="text-gray-50 text-2xl pb-4">{task.title}</h1>
      <p className="text-gray-50 text-lg">{task.description}</p>
    </div>
  );
};

export default Card;
