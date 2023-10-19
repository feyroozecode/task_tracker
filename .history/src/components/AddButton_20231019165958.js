
const AddButton = ({color, text}) => {
    return (
     <button
      className='btn'
     style={{ backgroundColor: color }}
     > {text} </button>
    )
}

AddButon.defaultProps = {
    
}

AddButton.propTypes = {
text: PropTypes.string,
color: PropTypes.string
}

export default AddButton