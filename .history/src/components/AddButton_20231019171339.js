import PropTypes from 'prop-types'
const AddButton = ({color, text, onClick}) => {

    return (
     <button
         className='btn'
        style={{ backgroundColor: color }}
        onClick={onClick}
     > {text} </button>
    )
}

AddButton.defaultProps = {
    color: 'steetblue'
}

AddButton.propTypes = {
    text: PropTypes.string, 
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default AddButton