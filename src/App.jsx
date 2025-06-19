import React from 'react';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';

export default function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>HabitFlow</h1>
      <HabitForm />
      <hr />
      <HabitList />
    </div>
  );
}
