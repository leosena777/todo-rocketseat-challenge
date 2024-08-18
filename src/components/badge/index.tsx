import { BadgeBase, Counter } from "./styles";

interface BadgeProps {
  description: string;
  count: number;
}

export function Badge({ count, description }: BadgeProps) {
  return (
    <BadgeBase>
      {description}
      <Counter>{count}</Counter>
    </BadgeBase>
  );
}
