
const AddButton = ({color, text}) => {
    return (
     <button
      className='btn'
     style={ color: color }
     > {text} </button>
    )

}

export default AddButton