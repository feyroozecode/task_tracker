import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1> { title } </h1>
        </header>
    )
}

// set default title
Header.prop = {
    title: 'Task Tracker'
}

export default Header 