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

function App() {
  globalStyles();

  return (
    <div>
      <Header />
      <CreateContainer>
        <Input type="text" placeholder="Adicione uma nova tarefa" />
        <Button>
          Criar
          <img src={PlusIcon} alt="Plus Icon" />
        </Button>
      </CreateContainer>
      <TasksContainer>
        <TasksStatus>
          <Badge description="Tarefas criadas" count={2} />
          <Badge description="Concluídas" count={2} />
        </TasksStatus>
        <TasksItemsContainer>
          {/* <TasksItem description="asdasd" done={false} id="12312"></TasksItem> */}
          <TaskEmpty />
        </TasksItemsContainer>
      </TasksContainer>
    </div>
  );
}

export default App;
