import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const SingleTask = (props) => {
    const { tasks, setTasks } = props;
    const { name, description, _id } = props.task;
    const [modalShow, setModalShow] = useState(false);
    const deleteTask = () => {
        const url = `http://localhost:5000/task/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = tasks.filter(item => item._id !== _id);
                    toast.success('Successfully Deleted');
                    setTasks(remaining);
                }
            })
    }

    const completeTask = () => {

        const updatedTask = { name, description, completed: "true" };
        console.log(updatedTask);

        fetch(`http://localhost:5000/task/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                fetch('http://localhost:5000/task')
                    .then(res => res.json())
                    .then(data => setTasks(data));
            })
    }
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <span className='text-danger'>{description}</span>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => deleteTask()}>Delete Task</button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <div className='p-3'>
            <div className='card p-3'>
                {
                    props.task.completed === "true" ? <h1 className='text-success'>{name}</h1>
                        :
                        <h1 className='text-danger'>{name}</h1>
                }
                <h3>{description}</h3>
                <button onClick={() => completeTask()} className='mb-3'>Complete Task</button>
                <button variant="primary" onClick={() => setModalShow(true)}>
                    Delete Task
                </button>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default SingleTask;