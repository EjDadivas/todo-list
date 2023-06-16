import { Button, Form, FormGroup, InputGroup, Modal, Stack } from "react-bootstrap";
import { useRef, useState } from "react";
import { useTodos } from "../context/TodosContext"; 

export default function AddTodoList(){
    const nameRef = useRef();
    const {addTodoList} = useTodos()
    const [value, setValue] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        addTodoList({
                name: nameRef.current.value,
            })
            setValue("")
        
    }

    return(
        <div className="mt-3">
            <Form onSubmit={handleSubmit}>
                <InputGroup size="lg">
                   
                        <Form.Control
                        ref={nameRef} 
                        type="text" 
                        required
                        placeholder="Add TodoList"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        />
        
                <Button variant="outline-warning" type="submit">Add List</Button>
                    
                </InputGroup>
            </Form>
        </div>
    )
}