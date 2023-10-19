import PropTypes from 'prop-types'
import AddButton from './AddButton'

/*
 * Header compnent show title and use a AddButton component for add new task 
*/
const Header = ({ title }) => {

    const onClick = (e) => {
        console.log('Click Add Btn');
    }

    return (
        <header className='header'>
            <h2 > { title } </h2>
            <AddButton color='green' text='Add' onClick={onClick} />
           
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