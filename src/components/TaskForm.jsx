import React, { useState } from 'react'

import './TaskForm.css'
import Tag from './Tag'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPlus } from 'react-icons/fa'; // Import icons

const TaskForm = ({ setTasks }) => {
    // const [task, setTask] = useState('');
    // const [status, setStatus] = useState('todo');

    // const handleTaskChange = (e) => {
    //     setTask(e.target.value);
    // }

    // const handleStatusChange = (e) => {
    //     setStatus(e.target.value);
    // }

    const [taskData, setTaskData] = useState({
        task: '',
        status: 'todo',
        tags: []
    });

    const checkTag = (tag) => {
        return taskData.tags.some(t => t === tag)
    }

    const selectTag = (tag) => {
        // console.log(tag);
        if (taskData.tags.some(t => t === tag)) {
            const filteredTags = taskData.tags.filter(t => t !== tag)
            setTaskData({ ...taskData, tags: filteredTags })
        } else {
            setTaskData({ ...taskData, tags: [...taskData.tags, tag] })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value)
        setTaskData({ ...taskData, [name]: value });
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(taskData);
        setTasks(prevTasks => [...prevTasks, taskData]);
        //optionally clear the form after submit
        setTaskData({ task: '', status: 'todo', tags: [] });
    }



    return (
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input type='text'
                    name='task'
                    value={taskData.task}
                    className='task_input'
                    placeholder='Enter Task'
                    onChange={handleChange}
                />

                <div className='task_form_bottom_line'>
                    <div>
                        <Tag tagName='HTML' Icon={FaHtml5} selectTag={selectTag} selected = {checkTag('HTML')}/>
                        <Tag tagName='CSS' Icon={FaCss3Alt} selectTag={selectTag} selected = {checkTag('CSS')}/>
                        <Tag tagName='JavaScript' Icon={FaJs} selectTag={selectTag} selected = {checkTag('JavaScript')}/>
                        <Tag tagName='React' Icon={FaReact} selectTag={selectTag} selected = {checkTag('React')}/>
                        <Tag tagName='Node' Icon={FaNodeJs} selectTag={selectTag} selected = {checkTag('Node') }/>
                        <Tag tagName='MongoDB' Icon={FaDatabase} selectTag={selectTag} selected = {checkTag('MongoDB') } />
                    </div>
                    <div>
                        <select
                            name='status'
                            value={taskData.status}
                            className='task_status'
                            onChange={handleChange}>
                            <option value='todo'>To do</option>
                            <option value='doing'>Doing</option>
                            <option value='done'>Done</option>
                        </select>
                        <button type='submit' className='task_submit'>+ Add Task</button>
                    </div>
                </div>



            </form>
        </header>
    )
}

export default TaskForm