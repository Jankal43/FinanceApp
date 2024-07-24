import React, { useEffect, useState } from 'react';
import Tag from './Tag';
import axios from 'axios';

function SelectTag(props) {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState({ emoji: '', description: '' });

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-end">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="border-4 p-32 rounded-lg shadow-md bg-black">
          {tags.map((tag, index) => (
            <div key={index} className="mb-4">
              <Tag emoji={tag.emoji} description={tag.description} setSpends={props.setSpends} setShowSelectTag={props.setShowSelectTag} />
            </div>
          ))}

          <div className="mb-4">
            <input
              type="text"
              placeholder="Emoji"
              value={newTag.emoji}
              onChange={(e) => setNewTag({ ...newTag, emoji: e.target.value })}
              className="mb-2 p-2 rounded"
            />
            <input
              type="text"
              placeholder="Description"
              value={newTag.description}
              onChange={(e) => setNewTag({ ...newTag, description: e.target.value })}
              className="mb-2 p-2 rounded"
            />
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleAddTag}>
              Add
            </button>
          </div>

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
