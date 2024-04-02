import React from 'react'

function Tag(props) {
  return (
    <button onClick={()=> {
        props.setTagSelected(props.description); // Use props.description instead of props.emoji if you want to set the description as the selected tag
        props.setShowSelectTag(false);
    }}>
        <div>{props.emoji} {props.description}</div>
    </button>
  )
}

export default Tag;