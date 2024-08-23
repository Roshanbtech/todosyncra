import React from 'react';
import { FaHtml5 } from 'react-icons/fa';

import './Tag.css'

const Tag = ({ tagName, Icon, selectTag, selected, color }) => {
  const tagStyle = {
    backgroundColor: selected ? 'red' : 'white',
    color: selected ? 'white' : 'black',
    border: selected ? '1px solid white' : '1px solid black',
  }
  return (
    <button type ='button' 
    style={selected ? tagStyle : null} 
    className='tag' 
    onClick={() => selectTag(tagName)}>
      <div className='icon-container'>
        <Icon className='icon' /> 
        <span className='tag-name'>{tagName}</span> 
      </div>
    </button>
  );
};

export default Tag