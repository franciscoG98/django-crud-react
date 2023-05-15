import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
        <h1>Todo App</h1>
        <Link to='/tasks'>Tasks</Link>
        <Link to='/tasks-create'>Create Task</Link>
    </>
  )
}

export default Navigation