import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, ListGroup, ListGroupItem } from 'reactstrap';



const Todo = () => {
    const data = useSelector(state => state.tasks);
    const value = useSelector(state => state.value);

    const dispatch = useDispatch();

    const typing = (event) => {
        const action = { type: "TYPING", payload: event.target.value };
        dispatch(action);
    }

    const add = () => {
        if (value.trim() === "") {
            alert("Please write task")
            return;
        }

        const action = { type: "ADD_TASK", payload: value };
        dispatch(action);
    }

    const deleteTask = (index) => {
        const action = { type: "DELETE_TASK", payload: index };
        dispatch(action);
    }

    return (
        <div className="container shadow rounded  p-5 mt-5">
            <h1 className="mb-5 text-center fw-bold text-primary">Todo App</h1>
            <div className="d-flex my-4">
                <Input onChange={typing} value={value} placeholder="new task..." className="me-2" />
                <Button onClick={add} color="primary">
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
            <ListGroup>
                {data.map((value, index) => {
                    return (
                        <ListGroupItem key={index} tag="a" href="#" action className="d-flex justify-content-between">
                            <span>{index + 1}. {value.title}</span>
                            <Button onClick={() => deleteTask(index)} color="danger">
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div>
    )
}

export default Todo

