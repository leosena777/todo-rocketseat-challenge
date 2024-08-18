import { Container, InputBase } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export function Input(props: InputProps) {
  return (
    <Container>
      <InputBase {...props} />
    </Container>
  );
}
