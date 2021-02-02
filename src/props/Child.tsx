interface ChildProps {
  color: string;
  onClick: () => void;
}
const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Hi there {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export { Child };

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      Hi there {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
