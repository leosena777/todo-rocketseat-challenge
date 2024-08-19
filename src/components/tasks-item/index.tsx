import {
  ButtonAction,
  Container,
  Description,
  Status,
  StatusDone,
} from "./styles";
import TrashIcon from "../../assets/trash.svg";
import SelectedIcon from "../../assets/selected.svg";

interface TasksItem {
  description: string;
  done: boolean;
  id: string;
  onStatusChange: (id: string, status: boolean) => void;
  onRemove: () => void;
}

export function TasksItem({
  description,
  done,
  id,
  onStatusChange,
  onRemove,
}: TasksItem) {
  return (
    <Container>
      {done ? (
        <StatusDone onClick={() => onStatusChange(id, !done)}>
          <img src={SelectedIcon} />
        </StatusDone>
      ) : (
        <Status onClick={() => onStatusChange(id, !done)} />
      )}
      <Description done={done}>{description}</Description>
      <ButtonAction onClick={onRemove}>
        <img src={TrashIcon} alt="Icone de lixeira" />
      </ButtonAction>
    </Container>
  );
}
