import { useState } from "react";
import { TaskProps } from "./types/types";

const Card = ({ title, description }: TaskProps) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <div
      className={`min-w-44 w-full h-fit shadow-lg bg-gray-700 rounded-xl p-6 ${
        isGrabbing ? "cursor-grab" : "cursor-grabbing"
      } `}
      onMouseUp={() => setIsGrabbing(true)}
      onMouseDown={() => setIsGrabbing(false)}
    >
      <h1 className="text-gray-50 text-2xl pb-4">{title}</h1>
      <p className="text-gray-50 text-lg">{description}</p>
    </div>
  );
};

export default Card;
