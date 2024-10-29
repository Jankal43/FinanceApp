import React from 'react'

function Tag(props) {
  return (
    <button className="hover:text-lg hover:font-semibold" onClick={()=> {
        props.setSpends(prevState => ({
        ...prevState,
        emoji: props.emoji,
        description: props.description
      }));; 
        props.setShowSelectTag(false);
    }}>
        <div className="text-2xl">{props.emoji} </div>
        <div>{props.description}</div>
    </button>
  )
}

export default Tag;