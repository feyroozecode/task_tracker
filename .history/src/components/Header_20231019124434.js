import PropTypes from 'prop'

const Header = ({ title }) => {
    return (
        <header>
            <h1> { title } </h1>
        </header>
    )
}

// set default title
Header.defaultPropos = {
    title: 'Task Tracker'
}

export default Header 