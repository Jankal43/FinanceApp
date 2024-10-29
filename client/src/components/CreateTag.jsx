import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./animations.css"

function CreateTag(props) {


    const [newTag, setNewTag] = useState({
        emoji: "",
        description: ""
    })

    const handleChange = (event) => {
        const { value, name } = event.target;
        setNewTag(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(newTag);
    };



    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/tags', {
                emoji: newTag.emoji,
                description: newTag.description,
            });

            if (response.status === 200) {
                console.log('Tag added:', response.data);
                props.addTag(newTag)
                setNewTag((prevState) => ({
                    ...prevState,
                    emoji: "",
                    description: ""
                }));

                props.setShowCreateTag(false);
            } else {
                console.error('Error adding tag:', response.data);
            }
        } catch (error) {
            console.error('Error adding tag:', error);
        }
    };

    return (
        <div className="CreateTagContainer backdrop-blur-sm fixed inset-0 bg-black bg-opacity-0 flex justify-center items-end">
            <div
                className="w-rem38 h-125 bg-gray-900 border-t p-16 rounded-t-3xl border-gray-600 shadow-md animated pt-3">

                <button onClick={() => props.setShowCreateTag(false)} className="text-white text-3xl pt-0 mt-0">
                    ←
                </button>

                <hr className="my-4"/>

                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="text-white text-xl font-semibold">NEW TAG</div>

                    <input
                        className="text-white text-center w-1/2 bg-transparent text-lg border-b border-gray-600 outline-none"
                        name="emoji"
                        placeholder="🏠 (sticker)"
                        onChange={handleChange}
                    />

                    <input
                        className="text-white text-center w-1/2 bg-transparent text-lg border-b border-gray-600 outline-none"
                        name="description"
                        placeholder="house (name)"
                        onChange={handleChange}
                    />

                    <button
                        className="bg-white hover:bg-gray-100 w-1/5 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        onClick={handleSubmit}
                    >
                        Confirm

                    </button>
                </div>

            </div>
        </div>
    );
}

export default CreateTag;
