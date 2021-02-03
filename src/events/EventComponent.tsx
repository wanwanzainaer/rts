const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const onDargStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('I am being dragged');
  };
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDargStart}>
        Drag Me!
      </div>
    </div>
  );
};

export { EventComponent };
