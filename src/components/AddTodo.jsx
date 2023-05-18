import { useState } from "react";

const AddTodo=(props)=>{
    // const[todo,settodo]=useState(props.todoItem);
    
    function handleAdd(){
        var newTodo=document.getElementById("todoitem").value;
        console.log(newTodo)

        if (newTodo==""){
            alert("empty")
        }
        else{
            document.getElementById("todoitem").value="";
            props.state([...props.todoItem,newTodo]);
        }

        }
    return(
        <div>
            <input type="text" id="todoitem" placeholder="Enter new todo Item"/>
            <button className="add" onClick={handleAdd}>Add</button>
        </div>
    )
}
export default AddTodo;