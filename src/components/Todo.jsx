import Styles from'./Todo.css';
import AddTodo from'./AddTodo';
import { useState } from 'react';
// var todoItem=[];

const Todo=()=>{
    // const [todoItem,settodoItem]=useState('first');
    // var todoItem=['first','s'];
    
    const [todoItem,settodoItem]=useState([])
    console.log(todoItem)

    function handleDelete(pos){
        var newtodo=[...todoItem]
        newtodo.splice(pos,1)
        settodoItem(newtodo)
        console.log(newtodo)
    }
    return(
        <>
        <AddTodo todoItem={todoItem} state={settodoItem}/>
        <div className='card'>
                {todoItem.map((item,pos)=>
                <>
                <div className="todo">
                    {item}
                 <button className="delete" onClick={()=>{handleDelete(pos)}} pos={pos}>Delete</button>
                 </div>
                </>
                  )}
                   
        </div>
        </>
    )
}
export default Todo;