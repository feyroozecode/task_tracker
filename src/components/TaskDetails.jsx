import { useState,  useEffect} from 'react'
import { useParams , Navigate, useNavigate, useLocation } from 'react-router-dom'
import Button from './Button'

const TaskDetails = () => {
    
    const TASK_BASE_URL = 'http://localhost:5000/tasks';

    const [loading, setLoading] = useState(true)
    const [task, setTask] = useState({})
    const [error, setError] = useState(null)

    const params   = useParams()
    const navigate = useNavigate()
    const { pathname } = useLocation()

     useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`${TASK_BASE_URL}/${params.id}`)

            const data = await res.json()

            if ( res.status ===  404 ){
                setError('Task not found')
                navigate('/')
            }

            setTask(data)
            setLoading(false)

        }

        fetchTask()
    })
    
       if(error) {
               return <Navigate to="/" />
        }

    return loading ?  (
            <div>Loading </div>
          ) : (
            <div>
                <p> Path :  {pathname} </p>
                <h3> { task.text } </h3>
                <p> {task.day} </p>
                <Button  onClick={() => {
                    navigate(-2)
                }} text='Go back' />
            </div>
          ) 

}

export default TaskDetails 