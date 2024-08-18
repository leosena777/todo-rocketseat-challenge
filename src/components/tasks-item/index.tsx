import { ButtonAction, Container, Description, Status } from "./styles";
import TrashIcon from "../../assets/trash.svg";

interface TasksItem {
  description: string;
  done: boolean;
  id: string;
}

export function TasksItem({ description, done, id }: TasksItem) {
  return (
    <Container>
      <Status />
      <Description>{description}</Description>
      <ButtonAction>
        <img src={TrashIcon} alt="Icone de lixeira" />
      </ButtonAction>
    </Container>
  );
}
