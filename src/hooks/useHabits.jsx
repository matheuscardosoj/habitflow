import { useState, useEffect } from 'react';

export default function useHabits() {
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem('habits');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (title) => {
    setHabits((prevHabits) => [
      ...prevHabits,
      { id: Date.now(), title, done: false },
    ]);
  };

  const toggleHabit = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((h) =>
        h.id === id ? { ...h, done: !h.done } : h
      )
    );
  };

  const removeHabit = (id) => {
    setHabits((prevHabits) => prevHabits.filter((h) => h.id !== id));
  };

  return { habits, addHabit, toggleHabit, removeHabit };
}