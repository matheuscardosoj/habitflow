import React from 'react';

export default function HabitCard({ habit, onToggle, onRemove }) {
  return (
    <li style={{ marginBottom: '10px' }}>
      <span
        style={{
          textDecoration: habit.done ? 'line-through' : 'none',
          marginRight: '10px'
        }}
      >
        {habit.title}
      </span>
      <button onClick={onToggle}>✔</button>
      <button onClick={onRemove} style={{ marginLeft: '5px' }}>🗑</button>
    </li>
  );
}
