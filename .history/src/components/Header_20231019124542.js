import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1> { title } </h1>
        </header>
    )
}

// set default title
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.PropTypes.

export default Header 