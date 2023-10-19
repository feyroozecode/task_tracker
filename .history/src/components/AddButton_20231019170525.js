import PropTypes from 'prop-types'
const AddButton = ({color, text}) => {

const onClick = (e) => {
    console.log(e);
}

    return (
     <button
      
     style={{ backgroundColor: color }}
     className='btn'
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