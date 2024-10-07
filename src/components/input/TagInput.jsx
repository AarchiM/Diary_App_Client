import React, { useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'

const TagInput = ({ tags, setTags }) =>
{
    const [inputValue, setInputValue] = useState("")
    const handleInputChange = (e) =>
    {
        setInputValue(e.terget.value);
    }
    const addnewTag = () =>
    {
        
    }
  return (
      <div>
          <div className="flex items-center gap-4 mt-3">
              <input type='text' className='text-sm bg-transparent border px-3 py-2 rounded' placeholder='Add Tags' />
              <button className="w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700">
                <MdAdd className='text-2xl text-blue-700 hover:text-white'/>
              </button>  
          </div> 

    </div>
  )
}

export default TagInput