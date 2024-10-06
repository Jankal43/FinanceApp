import React, { useEffect, useState,useRef } from 'react';
import Tag from './Tag';
import axios from 'axios';
import PlusButton from "./PlusButton";
import "./animations.css"

function SelectTag(props) {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState({ emoji: '', description: '' });
  const containerRef = useRef(null);
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get('http://localhost:8080/tags');
        console.log("response", response.data);
        setTags(response.data.tags);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchTags();
  }, []);

  const handleAddTag = async () => {
    try {
      const response = await axios.post('http://localhost:8080/tags', newTag);
      if (response.status === 200) {
        setTags(prevTags => [...prevTags, newTag]);
        setNewTag({ emoji: '', description: '' });
      }
    } catch (error) {
      console.error('Error adding tag:', error);
    }
  };

  const handleClickOutside = (event)=>{
    if ((event.target.className.includes('SelectTag'))){
      props.setShowSelectTag(false)
    };
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  return (

      //fixed bottom-0 h-1/2 max-w-lg sm:w-lg w-full bg-white dark:bg-black p-5 border-t rounded-t-3xl dark:border-zinc-600
      <div className="SelectTag backdrop-blur-sm fixed inset-0 bg-black bg-opacity-0 flex justify-center items-end z-[9999]">
        <div className="w-rem38 h-1/2 bg-gray-900 border-t p-16 rounded-t-3xl border-gray-600 shadow-md animated">
          <div className="flex justify-center gap-10">
            {/*<div*/}
            {/*    className="h-12 w-12 bg-gray-600 hover:bg-gray-500 text-5xl hover:text-6xl rounded-full flex items-center justify-center">*/}
            {/*  +*/}
            {/*</div>*/}
            <PlusButton />
            {tags.map((tag, index) => (
                <div key={index} className="mb-4">
                  <Tag emoji={tag.emoji} description={tag.description} setSpends={props.setSpends}
                       setShowSelectTag={props.setShowSelectTag}/>
                </div>
            ))}
          </div>
          {/*<div className="Inputs flex flex-col mb-4">*/}

          {/*    <input*/}
          {/*      type="text"*/}
          {/*      placeholder="Emoji"*/}
          {/*      value={newTag.emoji}*/}
          {/*      onChange={(e) => setNewTag({ ...newTag, emoji: e.target.value })}*/}
          {/*      className="mb-2 p-2 rounded"*/}
          {/*    />*/}
          {/*    <input*/}
          {/*      type="text"*/}
          {/*      placeholder="Description"*/}
          {/*      value={newTag.description}*/}
          {/*      onChange={(e) => setNewTag({ ...newTag, description: e.target.value })}*/}
          {/*      className="mb-2 p-2 rounded"*/}
          {/*    />*/}
          {/*    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleAddTag}>*/}
          {/*      Add*/}
          {/*    </button>*/}


          {/*  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"*/}
          {/*    onClick={() => props.setShowSelectTag(false)}*/}
          {/*  >*/}
          {/*    Cancel*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      </div>
  );
}

export default SelectTag;
