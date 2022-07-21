import axios from 'axios'
import React from 'react'
import { Button } from 'reactstrap'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import firebase from './config/firebase'
export default function Todo({todo}) {
    function deletetodo(){
    
      const ref= firebase.database().ref("ToDo").child(todo.id)
      ref.remove()
    
    }

    function check(){
        const check={
          id:todo.id,
          completed:todo.completed,
        }
        const ref= firebase.database().ref("ToDo").child(todo.id)
        console.log(todo.completed)
        ref.update({
          completed:!todo.completed,
        })
      //  console.log("ok")
     // axios.post("http://localhost:5001/todolist-af70d/us-central1/app/check",check)
      
      }
  return (<div className='todolist'>
    
    <p> <input type="checkbox" className='check' defaultChecked={todo.completed}  onClick={check} />
   {todo.task}
    <FontAwesomeIcon icon={faTrash} onClick={deletetodo} color="red" />
     
   </p>
   </div>
  )
}

