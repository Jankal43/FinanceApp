import React, { useState } from 'react';
import Tag from './Tag';
import tags from './tags';

function SelectTag(props) {
    
    
    
    return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-end">
      <div>
        <div className="border-4 p-32 rounded-lg shadow-md">
          {tags.map((tag, index) => (
            <Tag key={index} id={index} emoji={tag.emoji} description={tag.description} setTagSelected={props.setTagSelected} setShowSelectTag={props.setShowSelectTag} />
          ))}

          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={()=> props.setShowSelectTag(false)}
        >
          Cancel
        </button>
        </div>
      
      </div>
    </div>
  );
}

export default SelectTag;
