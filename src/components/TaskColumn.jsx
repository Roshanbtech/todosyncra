import React from 'react';
import Todo from '../assets/direct-hit.png'

import './TaskColumn.css'
import TaskCard from './TaskCard'

const TaskColumn = ({taskName, icon, tasks, status, handleDelete}) => {
    console.log(Todo)
  return (
    <section className='task_column'>
        <h2 className='task_column_heading'>
            <img className='task_column_icon' src={icon} alt='' load = 'lazy'/> {taskName}
            </h2>
           {tasks.map((task, index) => (
            task.status === status &&
            <TaskCard
                key={index}
                title={task.task}
                tags={task.tags}
                status={status}
                handleDelete={handleDelete}
                index={index}
            />
        ))}
    </section>
)
}

export default TaskColumn