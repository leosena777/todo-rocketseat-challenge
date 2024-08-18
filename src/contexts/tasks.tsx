import { createContext, useState } from "react";

interface Task {
  id: string;
  description: string;
  done: boolean;
}

export interface TasksContextData {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasksInput: string;
  setTasksInput: React.Dispatch<React.SetStateAction<string>>;
}

export const TasksContext = createContext({} as TasksContextData);

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksInput, setTasksInput] = useState("");

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, tasksInput, setTasksInput }}
    >
      {children}
    </TasksContext.Provider>
  );
};
