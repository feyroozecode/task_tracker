import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1 style={}> { title } </h1>
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
const he

export default Header 