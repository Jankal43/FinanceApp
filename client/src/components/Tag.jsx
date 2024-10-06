import React from 'react'

function Tag(props) {
  return (
    <button onClick={()=> {
        props.setSpends(prevState => ({
        ...prevState,
        emoji: props.emoji,
        description: props.description
      }));; 
        props.setShowSelectTag(false);
    }}>
        <div className="text-2xl">{props.emoji} </div>
        <div className="hover:text-lg hover:font-semibold">{props.description}</div>
    </button>
  )
}

export default Tag;