import { ButtonBase } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <ButtonBase {...props}>{props.children}</ButtonBase>;
}
