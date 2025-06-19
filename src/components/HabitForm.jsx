import React, { useState } from 'react';
import useHabits from '../hooks/useHabits';

export default function HabitForm() {
  const [title, setTitle] = useState('');
  const { addHabit } = useHabits();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    addHabit(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite um hábito"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}