import { Button, Form, Modal } from "react-bootstrap";
import { useRef } from "react";
import { useTodos } from "../context/TodosContext"; 

export default function AddTodoListModal({show, handleClose}){
    const nameRef = useRef();
    const {addTodoList} = useTodos()
    function handleSubmit(e){
        e.preventDefault()
        addTodoList({
                name: nameRef.current.value,
            })
        handleClose()
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Todo List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                        ref={nameRef} 
                        type="text" 
                        required/>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">Add</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}