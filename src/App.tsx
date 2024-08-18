import { CreateContainer } from "./App.styles";
import { Button } from "./components/button";
import { Header } from "./components/header";
import { Input } from "./components/input";
import { globalStyles } from "./styles/global";
import PlusIcon from "./assets/plus.svg";

globalStyles();

function App() {
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
    </div>
  );
}

export default App;
