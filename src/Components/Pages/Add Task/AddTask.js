import React from 'react';

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
        const url = `http://localhost:5000/task`;
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
        // event.target.reset();
    }
    return (
        <div>
            <form onSubmit={EventSubmit} className="w-100 mx-auto d-flex justify-content-center flex-column">
                <div className="w-75 mx-auto d-flex justify-content-center flex-column mb-3">
                    <input placeholder='Add Task Name' type="text" name="name" required />
                </div>
                <div className="w-75 mx-auto d-flex justify-content-center flex-column">
                    <input placeholder='Add Task Description' type="text" name="description" required />
                </div>
                <input className='form-submit button-33 w-50 mx-auto mt-4' type="submit" required value="Submit" />
            </form>
        </div>
    );
};

export default AddTask;