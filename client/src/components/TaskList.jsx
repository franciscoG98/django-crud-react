import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api"
import TaskCard from "./TaskCard"

const TaskList = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {

    
    async function loadTasks() {
        const res = await getAllTasks()
        setTasks(res.data)
    }
    loadTasks()

  }, [])
    

  return (
    <div>
      <h2>TaskList</h2>

      {tasks.map( task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
