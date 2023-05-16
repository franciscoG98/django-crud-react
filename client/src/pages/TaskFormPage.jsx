import { useEffect } from "react"
import Navigation from "../components/Navigation"
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api"
import { useNavigate, useParams } from "react-router-dom"
import toast from 'react-hot-toast';

const TaskFormPage = () => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async (data) => {

    if(params.id) {
      await updateTask(params.id, data)
      toast.success('Task updated', {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff"
        }
      })
    } else {
      await createTask(data)
      toast.success('Task created', {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff"
        }
      })
    }
    navigate('/tasks')
  })

  useEffect(() => {
    async function loadTask() {
      if(params.id) {
        const res = await getTask(params.id)
        setValue('title', res.data.title)
        setValue('description', res.data.description)
      }
    }
    loadTask()
  }, [params.id, setValue])

    return (
      <>
        <Navigation />
        <div className="max-w-xl mx-auto">
          <form onSubmit={onSubmit}>
            <label>
              Title
              <input
                type="text"
                {...register('title', { required: true })}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
              />
            </label>
            {errors.title && <span>This field is required</span>}
            <label>
              Description
              <textarea
                rows={3}
                {...register('description', { required: true })}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
              />
            </label>
            {errors.description && <span>This field is required</span>}
            <button
              className="bg-indigo-500 p-3 rounded-lg block w-full mt-3"
            >Save</button>
          </form>

          {params.id && (
            <div className="flex justify-end">
              <button
                className="bg-red-500 p-3 rounded-lg w-48 mt-3"
                onClick={async () => {
                  const accepted = window.confirm('Are you sure?')
                  if(accepted) {
                    await deleteTask(params.id)
                      toast.success('Task deleted', {
                        position: "bottom-right",
                        style: {
                          background: "#101010",
                          color: "#fff"
                        }
                      })
                    navigate('/tasks')
                  }
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </>
    )
}
  
export default TaskFormPage
