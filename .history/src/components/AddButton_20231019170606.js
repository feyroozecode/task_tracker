import PropTypes from 'prop-types'
const AddButton = ({color, text}) => {

const onClick = (e) => {
    console.log(e);
}

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
    color: PropTypes.string
}

export default AddButton