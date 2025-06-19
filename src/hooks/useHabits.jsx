import { useState, useEffect } from 'react'; 
export default function useHabits() { 
const [habits, setHabits] = useState(() => { 
const stored = localStorage.getItem('habits'); 
return stored ? JSON.parse(stored) : []; 
}); [cite: 220] 
useEffect(() => { 
localStorage.setItem('habits', JSON.stringify(habits)); 
}, [habits]); [cite: 221] 
const addHabit = (title) => { 
setHabits([...habits, { id: Date.now(), title, done: false }]); 
}; [cite: 222] 
const toggleHabit = (id) => { 
setHabits(habits.map(h => h.id === id ? { ...h, done: !h.done } : h)); 
}; [cite: 222] 
const removeHabit = (id) => { 
setHabits(habits.filter(h => h.id !== id)); 
}; [cite: 223] 
return { habits, addHabit, toggleHabit, removeHabit }; 
} 