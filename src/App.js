import logo from './logo.svg';
import './App.css';
import { Navbar,NavbarBrand} from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import firebase from './config/firebase'
import axios from 'axios'
import {Button} from 'reactstrap'
import { useEffect, useState } from 'react';
import Tasklist from'./tasklist'
import Location from './location'
function App() {
  

const [task,setTask]=useState('')


function AppendTask(e){
  e.preventDefault();
  console.log(task);
 const ref=firebase.database().ref("ToDo")
  const todo={
    task,
    completed:false,
  }
  ref.push(todo)
}
return (
   <div className="App">
<Navbar color="dark" light expand="md">
 <NavbarBrand><h3>To Do List WebApp</h3></NavbarBrand>
</Navbar>
<div className='body'>
 <h2>To Do list</h2>
 <div className='text-field'>
 <InputGroup>
 <input type="text" className="form-control"  placeholder="Enter Task" onChange={(e)=>setTask(e.target.value)} />
  <Button type="submit" id="inputGroupFileAddon03" onClick={AppendTask} >Add</Button>
  </InputGroup>
  </div>
  <Tasklist/>
  <Location/>
   </div>
  </div>
  );
}

export default App;
