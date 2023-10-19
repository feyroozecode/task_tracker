import PropTypes from 'prop-types'
const AddButton = ({color, text}) => {

const onClick =     

    return (
     <button
      className='btn'
     style={{ backgroundColor: color }}
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