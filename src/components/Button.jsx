import PropTypes from 'prop-types'

/*
 * AddButton component used for adding a new task 
 * @param color => define a button background color
 * @param text => a text to show on button
 * @param onClick => onClick function to call when btn is clicked 
*/
const MButton = ({color, text, onClick}) => {

    return (
     <button
         className='btn'
        style={{ backgroundColor: color }}
        onClick={onClick}
     > {text} </button>
    )
}

MButton.defaultProps = {
    color: 'steetblue' // default color of button 
}

// define a different props types to prevent error and for type checking 
MButton.propTypes = {
    text: PropTypes.string, 
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default MButton