import React from 'react';
import useHabits from '../hooks/useHabits';
import HabitCard from './HabitCard';

export default function HabitList() {
  const { habits, toggleHabit, removeHabit } = useHabits();

  if (habits.length === 0) {
    return <p>Você ainda não adicionou nenhum hábito.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onToggle={() => toggleHabit(habit.id)}
          onRemove={() => removeHabit(habit.id)}
        />
      ))}
    </ul>
  );
}
