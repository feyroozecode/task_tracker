import { useNavigate } from 'react-router-dom'
import Button from './Button'


const About= () => {

    const navigate = useNavigate()

    return (
        <div>
            <h4>Version 1.0.0 </h4>
            <p> Alfajer Todo app </p>
          <br />
          <Button onClick={()=> {
             navigate(-1);
          }} text='Go Back' />
         
        </div>
    )
}

export default About