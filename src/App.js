import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Problem Solving",
        day: "Apr 27 8:00 am",
        reminder: true,
      },
      {
        id: 2,
        text: "Web dev work",
        day: "Apr 27 10:30 pm",
        reminder: true,
      }

    ]
  )

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000 + 1)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete task
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const onToggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggleReminder} /> : 'No Tasks to do.' }
    </div>
  );
}

export default App;
