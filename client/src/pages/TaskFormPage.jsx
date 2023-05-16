import Navigation from "../components/Navigation"
import { useForm } from 'react-hook-form'
import { createTask } from "../api/tasks.api"
import { useNavigate } from "react-router-dom"

const TaskFormPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async data => {
    await createTask(data)
    navigate('/tasks')
  })

    return (
      <>
        <Navigation />
        <h2>Task Form Page</h2>
        <form onSubmit={onSubmit}>
          <label>
            Title
            <input
              type="text"
              {...register('title', { required: true })}
            />
          </label>
          {errors.title && <span>This field is required</span>}
          <label>
            Description
            <textarea
              rows={3}
              {...register('description', { required: true })}
            />
          </label>
          {errors.description && <span>This field is required</span>}
          <button>Save</button>

        </form>
      </>
    )
}
  
export default TaskFormPage
