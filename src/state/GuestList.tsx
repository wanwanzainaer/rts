import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guest, setGuest] = useState<string[]>([]);

  const onClick = () => {
    // same block so can do this
    setName('');
    setGuest((state) => [...state, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guest.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};
export { GuestList };
