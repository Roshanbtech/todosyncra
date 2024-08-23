import React from 'react'

import './TaskCard.css'

import Tag from './Tag'

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Import icons

import deleteIcon from '../assets/delete.png'

const TaskCard = ({title, tags, handleDelete, index}) => {
  return (
    <article className="task_card">
    <p className="task_text">{title}</p>

    <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
            {/* <Tag tagName='HTML' Icon={FaHtml5} />
            <Tag tagName='CSS' Icon={FaCss3Alt} />
            <Tag tagName='JavaScript' Icon={FaJs} />
            <Tag tagName='React' Icon={FaReact} />
            <Tag tagName='Node' Icon={FaNodeJs} />
            <Tag tagName='MongoDB' Icon={FaDatabase} /> */}

            {tags.map((tag, index) => 
            <Tag key={index} tagName={tag} 
            Icon={tag === 'HTML' ? FaHtml5 : tag === 'CSS' ? FaCss3Alt : tag === 'JavaScript' ? FaJs : tag === 'React' ? FaReact : tag === 'Node' ? FaNodeJs : tag === 'MongoDB' ? FaDatabase : null}/>)}
        </div>
        {/* <div className='task_card_actions'>
            <button className='task_card_action'>Edit</button>
            <button className='task_card_action'>Delete</button>
        </div> */}
        <div className='task_delete'><img src = {deleteIcon}  onClick={() => handleDelete(index)} className='delete_icon' alt='' /></div>
    </div>
    </article>
  )
}

export default TaskCard