import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import AddItems from "./AddItems";
import { useTodos } from "../context/TodosContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function TodoCard({name, totalItems, totalDoneItems, todoListId, onDeleteListClick}) {
    const {getTodoListItems, setItemsDone, getDoneItems, deleteTodoItem, deleteTodoList} = useTodos()
    const items = getTodoListItems(todoListId);
    const doneItems = getDoneItems(items);
    

    function handleDone(id){
        setItemsDone({id:id})
    }
  return (
    <Card className="border-primary">
        <Card.Header className="bg-primary text-light">
        <Card.Title className="my-2 ">
            <Stack direction="horizontal" gap="2" className="mb-3">
                <div className="me-auto fs-3">{name} - <span className="fs-6 ms-1">{doneItems.length} / {items.length}</span></div>
                {/* <Button variant="primary" onClick={()=> deleteTodoList({id: todoListId})}>Delete</Button> */}
                {/* <Button variant="outline-warning"><FontAwesomeIcon icon={faPen}/></Button> */}
                <Button variant="outline-danger" onClick={onDeleteListClick}><FontAwesomeIcon icon={faTrashCan}/></Button>
              
            </Stack>

        </Card.Title>
            <ProgressBar 
            className="my-2"
            min={0}
            max={items.length}
            now={doneItems.length}
            variant={getProgressBarVariant(doneItems.length,items.length)}
            />
        </Card.Header>
        <Card.Body classname="overflow-auto h-20 scroll">
            <Stack direction="vertical" gap="2">    
                      
              {items.map(item =>(
                <Stack direction="horizontal" gap="2" key={item.id}>  
                 
                   {/* <FormCheck onClick={()=>handleDone(item.id)}/> */}
                    <div className="me-auto" onClick={()=>handleDone(item.id)}>
                      
                    { item.isDone ?(
                        <Stack direction="horizontal" gap="3">
                            <Button variant="secondary" size="sm" disabled ><FontAwesomeIcon icon={faCheck}/></Button>
                            <div className="text-secondary"><del>{item.description}</del></div>
                        </Stack>
                        
                        
                    ) :(
                    <Stack direction="horizontal" gap="3" classname="bg-gray">
                        <Button variant="outline-primary" size="sm" disabled><FontAwesomeIcon icon={faCheck}/></Button>
                        <div>{item.description}</div>
                    </Stack>
                        
                    )}
                    
                    </div>
                  <Button variant="outline-danger" size="sm" onClick={() => deleteTodoItem(item)}><FontAwesomeIcon icon={faXmark}/></Button>
              </Stack>
              ))}
                
                <AddItems
                defaultTodoListId={todoListId}
                /> 
            </Stack>
            
            
        </Card.Body>
    </Card>
  )
}

function getProgressBarVariant(done, totalItems){
    const ratio = done / totalItems
    if (ratio < .5) return "info"
    if (ratio < .75) return "warning"
    return "success"

}