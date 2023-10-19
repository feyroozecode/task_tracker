import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1 style={{ color: 'red', backgroundColor: 'green', textAlign }}> { title } </h1>
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

export default Header 