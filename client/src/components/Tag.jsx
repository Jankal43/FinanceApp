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
        <div>{props.emoji} {props.description}</div>
    </button>
  )
}

export default Tag;