import {
  CreateContainer,
  TasksContainer,
  TasksStatus,
  TasksItemsContainer,
} from "./App.styles";
import { Button } from "./components/button";
import { Header } from "./components/header";
import { Input } from "./components/input";
import { globalStyles } from "./styles/global";
import PlusIcon from "./assets/plus.svg";
import { Badge } from "./components/badge";
import { TasksItem } from "./components/tasks-item";
import { TaskEmpty } from "./components/task-empty";
import { useTasks } from "./hooks/tasks";

function App() {
  globalStyles();

  const { tasks, setTasks, tasksInput, setTasksInput } = useTasks();
  const handleAddTask = () => {
    if (tasksInput) {
      const newTask = {
        id: String(new Date().getTime()),
        description: tasksInput,
        done: false,
      };

      setTasks([newTask, ...tasks]);
      setTasksInput("");
    }
  };

  return (
    <div>
      <Header />
      <CreateContainer>
        <Input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={tasksInput}
          onChange={(e) => setTasksInput(e.target.value)}
        />
        <Button onClick={handleAddTask}>
          Criar
          <img src={PlusIcon} alt="Plus Icon" />
        </Button>
      </CreateContainer>
      <TasksContainer>
        <TasksStatus>
          <Badge description="Tarefas criadas" count={tasks.length} />
          <Badge
            description="Concluídas"
            count={tasks.filter((item) => item.done).length}
          />
        </TasksStatus>
        <TasksItemsContainer>
          {!!tasks.length &&
            tasks.map((item) => (
              <TasksItem
                id={item.id}
                description={item.description}
                done={item.done}
              ></TasksItem>
            ))}
          {!tasks.length && <TaskEmpty />}
        </TasksItemsContainer>
      </TasksContainer>
    </div>
  );
}

export default App;
