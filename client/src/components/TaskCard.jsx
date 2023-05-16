/* eslint-disable react/prop-types */
const TaskCard = ({ task }) => {
  return (
    <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <input type="checkbox" value={task.done} />
        <hr />
    </div>
  )
}

export default TaskCard
