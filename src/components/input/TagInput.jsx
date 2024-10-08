import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const addnewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
    }
    setInputValue("");
  };


  const keyDownHandler =(e)=>{
    if(e.key==="enter"){
      addnewTag();
    }
  }

  const removeTagHandler=(removeTag)=>{
    setTags(tags.filter((tag,index)=>index!==removeTag))
  }

  return (
    <div className="">
     
        {tags?.length > 0 &&
          <div className="flex items-center gap-2 flex-wrap mt-2"> 
          {tags.map((tag, index) => (
            <p className="flex items-center gap-2" key={index}>
              #{tag}
              <MdClose onClick={()=>removeTagHandler(index)}/>
            </p>
          ))}
      </div>
          }
      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          className="text-sm bg-transparent border px-3 py-2 rounded"
          placeholder="Add Tags"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={addnewTag}
          className="w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700"
          onKeyDown={()=>keyDownHandler(e)}
        >
          <MdAdd className="text-2xl text-blue-700 hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
