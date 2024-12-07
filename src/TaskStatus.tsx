import Card from "./Card";

const TaskStatus = ({ tasks, status }) => {

    const filteredTasks = tasks.filter((task) => task.status === status.title)

  return (
    <div className="flex flex-col gap-4 min-w-80 w-full bg-gray-800 rounded-xl p-4">
      <h2 className="text-gray-50 text-2xl font-semibold">{status.title}</h2>
      <div className="flex flex-col gap-2">
        {filteredTasks.map((task) => (
          <Card title={task.title} description={task.description} />
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;
