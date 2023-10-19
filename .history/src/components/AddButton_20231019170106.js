import PropTypes from 'prop-types'
const AddButton = ({color, text}) => {
    return (
     <button
      className='btn'
     style={{ backgroundColor: color }}
     > {text} </button>
    )
}

AddButon.defaultProps = {
    color: 'steetblue'
}

AddButton.propTypes = {
    text: PropTypes.string, 
    color: PropTypes.string
}

export default AddButton