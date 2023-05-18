import './Form.css';
import { useState } from 'react';


const Form=(props)=>{
    const [inputs, setInputs] = useState({});
    const id=Math.random()
    const handleInputs=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values ,[name]: value,id:id}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        props.user(inputs);
       
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">UserName</label>
                <input type="text" name='uName' value={inputs.uName ||" "} onChange={handleInputs}></input>
                <label htmlFor="age">Age</label>
                <input type="text" name='age' value={inputs.age ||" "} onChange={handleInputs}></input>
                <button type='submit'>Save</button>
            </form>
            
        </>
    )
}
export default Form;