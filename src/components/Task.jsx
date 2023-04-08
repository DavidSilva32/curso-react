import React from 'react';

import './Task.css'
import { CgClose, CgInfo } from 'react-icons/cg'

const Task = ({ task, handleTaskClick, handleTaskDelition}) => {
    return (
        <div className='task-container' style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>

            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className='buttons-container'>
                <button className='see-task-details-button'>
                    <CgInfo />
                </button>
                <button className='remove-task-button' onClick={() => handleTaskDelition(task.id)}>
                    <CgClose />
                </button>
            </div>
        </div>
    )
    // return <div className='task-container'>{task.title}</div>
}

export default Task;