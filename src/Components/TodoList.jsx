import React, { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    const [newTask, setNewTask] = useState("");

    const inputChangeHandler = (event) => {
        setNewTask(event.target.value)


    }

    const addTask = () => {
        if(newTask.trim() !== ""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
       


    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((element,i)=> i !== index);
        setTasks(updatedTasks);

    }

    const moveUpTask = (index) => {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    const moveDownTask = (index) => {
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = 
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return (
        <div className='to-do-list'>
            <h1>TO-DO-LIST</h1>

            <div>
                <input
                    type='text'
                    className='input-text'
                    placeholder='Enter the Task...'
                    value={newTask}
                    onChange={inputChangeHandler}
                />
                <button
                    className='add-button'
                    onClick={addTask}
                >ADD</button>
            </div>

            { tasks.length >0 && (<ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button
                            className='delete-btn'
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className='up-btn'
                            onClick={() => moveUpTask(index)}>
                            Up
                        </button>
                        <button
                            className='down-btn'
                            onClick={() => moveDownTask(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>) }

        </div>
    )
}

export default TodoList