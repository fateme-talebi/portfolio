import { ReactNode } from "react";

interface CircleComponentProps {
  color: string;
  children: ReactNode;
}

function CircleComponent({ color, children }: CircleComponentProps) {
  return <div className={`circle ${color}`}>{children}</div>;
}

export default CircleComponent;
