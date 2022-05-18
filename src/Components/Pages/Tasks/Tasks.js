import React, { useEffect, useState } from 'react';
import SingleTask from '../Single Task/SingleTask';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [])

    console.log(tasks);
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                tasks.map(task => <SingleTask key={task._id} task={task} tasks={tasks} setTasks={setTasks}></SingleTask>)
            }
        </div>
    );
};

export default Tasks;