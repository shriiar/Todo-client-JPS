import React from 'react';
import addImg from '../../../img/undraw_Add_files_re_v09g.png';
import './AddTask.css'

const AddTask = () => {
    const EventSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;

        console.log(name, description);
        const newItem = {
            name: name,
            description: description,
            completed: "false"
        }
        const url = `https://damp-beach-13268.herokuapp.com/task`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(result => {
                console.log('Added Successfullt')
            })
        event.target.reset();
    }
    return (
        <div>
            <div style={{ margin: "0 0 1050px 0" }} class="page-add">
                <div class="container-add">
                    <div class="left-add">
                        <div class="login">Add Task</div>
                        <img src={addImg} className='img-fluid' alt="" />
                    </div>
                    <div class="right-add d-flex flex-column justify-content-center align-items-center">
                        <form onSubmit={EventSubmit} className="mx-auto">
                            <div className="input-group">
                                <label htmlFor='name'></label>
                                <input placeholder='Add Task Name' type="text" name="name" required />
                            </div>
                            <div className="input-group">
                                <textarea placeholder='Add Task Description' type="text" name="description" required />
                            </div>
                            <input className='form-submit button-33' type="submit" required value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddTask;