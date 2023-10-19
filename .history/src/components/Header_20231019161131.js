import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h2 style={headingStyles}> { title } </h1>
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