import PropTypes from 'prop-types'
import AddButton from './AddButton'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h2 > { title } </h2>
            <AddButton color='green' text />
        </header>
    )
}

// set default title
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// styles
const headingStyles = {
    color: 'wheat', 
    backgroundColor: 'green', 
    textAlign: 'center' 
}

export default Header 