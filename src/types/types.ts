export type TaskType = {
  id: number;
  title: string;
  description: string;
  status: string;
};

export type TaskStatusType = {
  id: number;
  title: string;
};

export type TaskStatusProps = {
  tasks: TaskType[];
  status: { title: string };
};

export type TaskProps = {
  title: string;
  description: string;
};
