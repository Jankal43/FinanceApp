import React, { useEffect, useState} from 'react';
import Tag from './Tag';
import axios from 'axios';
import PlusButton from "./PlusButton";
import "./animations.css"
import CreateTag from "./CreateTag";

function SelectTag(props) {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState({ emoji: '', description: '' });
  const [showCreateTag, setShowCreateTag] = useState(false);


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


  function addTag(newTag) {
    setTags((prevTags) => [
      ...prevTags,
      {
        emoji: newTag.emoji,
        description: newTag.description
      },
    ]);
  }



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

  useEffect(() => {
    console.log("showCreateTag state changed:", showCreateTag);
  }, [showCreateTag]);



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
      <div className="SelectTag backdrop-blur-sm fixed inset-0 bg-black bg-opacity-0 flex justify-center items-end">
        <div className="w-rem38 h-1/2 bg-slate-100 dark:bg-gray-900 text-black dark:text-white border-t p-16 rounded-t-3xl border-gray-600 shadow-md animated">
          <div className="flex flex-wrap justify-center gap-10">
            <button onClick={() => setShowCreateTag(true)}>
              <PlusButton/>
            </button>
            {tags.map((tag, index) => (
                <div key={index} className="mb-4">
                  <Tag emoji={tag.emoji} description={tag.description} setSpends={props.setSpends}
                       setShowSelectTag={props.setShowSelectTag}/>
                </div>
            ))}
            <div>
              {showCreateTag && <CreateTag setShowCreateTag={setShowCreateTag} addTag={addTag}/>}
            </div>
          </div>
        </div>
      </div>
  );
}

export default SelectTag;
