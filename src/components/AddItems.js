import React, { useRef, useState } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'
import { useTodos } from '../context/TodosContext'

export default function AddItems({defaultTodoListId}) {
    const descriptionRef = useRef()
    const {addTodoItem}= useTodos()
    const [value, setValue] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        addTodoItem({
            description: descriptionRef.current.value,
            isDone: false,
            todoListId: defaultTodoListId,
        })
        setValue("")
    }
  return (
    <div className='mt-2'>
        <Form onSubmit={handleSubmit}>
            <Form.Control
            className='border-0 border-bottom'
            placeholder='&#43;   Add item'
            ref={descriptionRef}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            />
        </Form>
    </div>
  )
}
