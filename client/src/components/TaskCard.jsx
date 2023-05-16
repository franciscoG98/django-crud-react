import { useNavigate } from 'react-router-dom'

/* eslint-disable react/prop-types */
const TaskCard = ({ task }) => {

  const navigate = useNavigate()

  return (
    <div
      style={{background: 'black'}}
      onClick={() => {
        navigate(`/tasks/${task.id}`)
      }}
    >
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <input type="checkbox" value={task.done} />
        <hr />
    </div>
  )
}

export default TaskCard
