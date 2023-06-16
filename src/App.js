import { Button, Container, Nav, Navbar, Stack } from "react-bootstrap";
import TodoCard from "./components/TodoCard";
import { useState } from "react";
import AddTodoListModal from "./components/AddTodoListModal";
import { useTodos } from "./context/TodosContext";
import DeleteListModal from "./components/DeleteListModal";
import AddTodoList from "./components/AddTodoList";

function App() {
  const [showAddTodoListModal, setShowAddTodoListModal] = useState(false)
  const [showDeleteListModalTodoListId, setShowDeleteListModalTodoListId] = useState()
  const {todoLists, getTodoListsItems} = useTodos()
  return (
    <>
   
    <Container className="my-4">
    {/* <Navbar expand="lg" bg="dark" variant="dark">
    <Container><Navbar.Brand className="">Todo List App</Navbar.Brand></Container>
    </Navbar> */}
      {/* <Stack direction="horizontal" gap="2" className="mb-4">
        <h2 className="me-auto">TodoList</h2>
        <Button variant="outline-primary" onClick={()=>{setShowAddTodoListModal(true)}}>Add Todo</Button>
      </Stack> */}
      <Navbar className="text-center bg-primary p-3 text-light mb-4 " > 
      <Stack direction="vertical" className="text-center bg-primary p-3 text-light mb-4 ">
      <h1 className="">Todo List App</h1>
      
     
      <AddTodoList/>
      </Stack>
      </Navbar>
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(400px, 1fr))",
        gap: "1rem",
        alignItems: "flex-start"
    }}>
      {
        todoLists.map(todoList => {
          
          return <TodoCard
          key={todoList.id}
          name={todoList.name}
          todoListId={todoList.id}
          onDeleteListClick = {()=>setShowDeleteListModalTodoListId(todoList.id)}
          />
        })
      }
      </div>
    </Container>
    <AddTodoListModal
    show={showAddTodoListModal}
    handleClose={()=>{setShowAddTodoListModal(false)}}
    />
    <DeleteListModal
    todoListId={showDeleteListModalTodoListId}
    handleClose={()=>setShowDeleteListModalTodoListId()}
    />
   <footer className="text-center bottom">
   <a class="text-dark link" href="https://ej-d.vercel.app/">© 2022 Copyright:
      EJD</a>
   </footer>
    </>
  );
}

export default App;
