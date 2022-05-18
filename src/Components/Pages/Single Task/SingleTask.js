import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './SingleTask.css'

const SingleTask = (props) => {
    const { tasks, setTasks } = props;
    const { name, description, _id } = props.task;
    const [modalShow, setModalShow] = useState(false);
    const deleteTask = () => {
        const url = `https://damp-beach-13268.herokuapp.com/task/${_id}`;
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

        fetch(`https://damp-beach-13268.herokuapp.com/task/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                fetch('https://damp-beach-13268.herokuapp.com/task')
                    .then(res => res.json())
                    .then(data => setTasks(data));
            })
    }
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal className='dark'
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
                    <button className='button-33' onClick={() => deleteTask()}>Delete Task</button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <div className='p-3'>
            <div className='card border-0'>
                <div class="card__overlay">
                    <div class="card__header">
                        <div class="card__header-text fs-1">
                            <h3 class="card__title">
                                {
                                    props.task.completed === "true" ? <h1 className='text-success'><del>{name}</del></h1>
                                        :
                                        <h1 className='text-danger'>{name}</h1>
                                }
                            </h3>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <p class="card__status fw-1 text-center">
                        {
                                    props.task.completed === "true" ? <h1 className='text-success'>{description}</h1>
                                        :
                                        <h1 className='text-danger'>{description}</h1>
                                }
                        </p>
                        {
                            props.task.completed === "false" && <button onClick={() => completeTask()} className='mb-3 button-33 w-50 mx-auto'>Complete Task</button>
                        }
                        <button variant="primary" className='mb-3 button-33 w-50 mx-auto' onClick={() => setModalShow(true)}>
                            Delete Task
                        </button>
                    </div>
                </div>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default SingleTask;