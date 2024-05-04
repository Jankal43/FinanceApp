import React, { useState } from 'react';
import Tag from './Tag';
import tags from './tags';

function SelectTag(props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-end">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="border-4 p-32 rounded-lg shadow-md bg-black">
        {tags.map((tag, index) => (
          <div key={index} className="mb-4">
            <Tag emoji={tag.emoji} description={tag.description} setSpends={props.setSpends} setShowSelectTag={props.setShowSelectTag} />
          </div>
        ))}


          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => props.setShowSelectTag(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectTag;
