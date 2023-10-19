
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

// set default 
Header.defaultPropos = {
    title: 'Task Tracker'
}

export default Header 