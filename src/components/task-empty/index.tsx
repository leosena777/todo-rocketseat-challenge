import { Caption, Container, Image, Title } from "./styles";
import Clipboard from "../../assets/Clipboard.svg";

export function TaskEmpty() {
  return (
    <Container>
      <Image src={Clipboard} />
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <Caption>Crie tarefas e organize seus itens a fazer</Caption>
    </Container>
  );
}
