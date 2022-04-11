import React, { useState } from 'react'
import Show from './Show';

const Form=()=>{
const[name,setName]=useState('');
const[age,setAge]=useState('');
const[salary,setSalary]=useState('');
const[show,setShow]=useState(false)

const showData=()=>{
    setShow(!show)
}
    return(
        <div style={{textAlign:"center"}}>
        <h2>Day - 3 Task (React.JS)</h2><br/>
        <h2>Employee Data</h2><br/>
        <input type='text' 
        value={name} 
        placeholder='Your Name' 
        onChange={(event)=>setName(event.target.value)} 
        />
        <br/><br/>
        <input type='number' 
        value={age} 
        placeholder='Your Age' 
        onChange={(event)=>setAge(event.target.value)}
        />
        <br/><br/>
        <input type='number' 
        value={salary} placeholder='Your Salary' 
        onChange={(event)=>setSalary(event.target.value)}
        />
        <br/><br/>
        <button type='submit' 
        onClick={showData}>
        Submit
        </button>
        <br/> <br/>

        { show &&
            <Show Username={name}
            Userage={age} 
            Usersalary={salary} 
            />
        } 
        </div>
    )
}
export default Form;