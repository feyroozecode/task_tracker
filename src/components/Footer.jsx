import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p> &copy; Alfajer Apps, 2023  </p>
            
            <Link to="/about"> About </Link>
        </footer>
    )
}

export default Footer