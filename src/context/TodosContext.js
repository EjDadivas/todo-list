// list
// items
// getDoneItems(ListId){where status is..}
// getTotalDoneItems(ListId){total}
// addItem(description, status:"defaulat[not Done]", ListId)
// deleteItem(id)
// deleteList(id)
import React, { useContext, useState} from "react";
import {v4 as uuidV4} from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage";


const TodosContext =  React.createContext()

export function useTodos(){
    return useContext(TodosContext)
}

export const TodosProvider = ({children}) => {
    const [todoLists, setTodoLists] = useLocalStorage("todoLists", [])
    const [todoItems, setTodoItems] = useLocalStorage("todoItems", [])

    function getTodoListItems(todoListId){
        return todoItems.filter(todoItem =>todoItem.todoListId === todoListId)
    }

    function getDoneItems(items){
        return items.filter(item => item.isDone === true)
    }

    function setItemsDone({ id }) {
        setTodoItems((prevTodoItems) =>
          prevTodoItems.map((todoItem) => {
            if (todoItem.id === id) {
              return { ...todoItem, isDone: !todoItem.isDone};
            }
            return todoItem;
          })
        );
      }
      
    function addTodoItem({description, isDone, todoListId}){
        setTodoItems(prevTodoItems =>{
            return [...prevTodoItems, {id: uuidV4(), description, isDone, todoListId}]
        })
    }

    function addTodoList({name}){
        setTodoLists(prevTodoLists => {
            if(prevTodoLists.find(todoList => todoList.name === name)){
                return prevTodoLists
            }
            return [...prevTodoLists, {id: uuidV4(), name}]
        })
    }

    function deleteTodoList({id}){
        setTodoLists(prevTodoList => { return prevTodoList.filter(todoList =>todoList.id !== id)})
    }

    function deleteTodoItem({id}){
        setTodoItems(prevTodoItem => { return prevTodoItem.filter(todoItem =>todoItem.id !== id)})
    }

    return <TodosContext.Provider value = {{
        todoLists,
        todoItems,
        getTodoListItems,
        getDoneItems,
        setItemsDone,
        addTodoItem,
        addTodoList,
        deleteTodoList,
        deleteTodoItem
    }}>
    {children}
    </TodosContext.Provider>
}