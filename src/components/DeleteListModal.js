import { Button, Form, Modal, Stack } from "react-bootstrap";
import { useRef } from "react";
import { useTodos } from "../context/TodosContext"; 

export default function DeleteListModal({todoListId ,handleClose}){
    const { deleteTodoList, todoLists} = useTodos();

    const todoList = todoLists.find(todoList =>todoList.id === todoListId)
    return(
        <Modal show={todoListId != null} onHide={handleClose}>
            
                <Modal.Header closeButton>
                    <Modal.Title>Delete List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-2">Are you sure you wanna delete {todoList?.name} list?</div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="outline-primary" onClick={handleClose}>Cancel</Button>
                <Button variant ="danger" onClick={()=>{
                    deleteTodoList({id: todoList.id})
                    handleClose()
                    }}>Delete</Button>
                </Modal.Footer>
            
        </Modal>
    )
}