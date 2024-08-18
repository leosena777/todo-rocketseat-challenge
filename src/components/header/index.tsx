import Logo from "../../assets/Logo.svg";
import { Container, LogoContainer } from "./styles";

export function Header() {
  return (
    <Container>
      <LogoContainer src={Logo} alt="todo application logo" />
    </Container>
  );
}
