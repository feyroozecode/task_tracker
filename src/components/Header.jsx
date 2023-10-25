import PropTypes from 'prop-types'
import AddButton from './Button'

/*
 * Header compnent show title and use a AddButton component for add new task 
*/
const Header = ({ onAdd, showAdd, title }) => {

    return (
        <header className='header'>
            <h2 > { title } </h2>
            <AddButton 
                color={showAdd  ? 'red': 'green' } 
                text={showAdd ? 'Close': 'Add'  } 
                onClick={onAdd} 
            />
           
        </header>
    )
}

// set default title
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired  // title is required by the header
}

export default Header 