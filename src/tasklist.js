
import { useState,useEffect } from 'react'
import firebase from './config/firebase'
import './App.css'
import { InputGroup } from 'reactstrap'
import axios from 'axios'
import Todo from './todo'
function Tasklist() {
 const [list,setlist]=useState()
 const [idno,setidno]=useState()

useEffect(()=>{
  const ref=firebase.database().ref("ToDo")
  ref.on('value',(snapshot)=>{
    const list=[]
  
    const query=snapshot.val();
   for(let id in query){
      list.push({id,...query[id]})
  
    }
console.log(list)
 setlist(list)

  })
},[])

  return (
    
    
<div id='#tasks'>{list ? list.map((todo,index)=><div><b>Task {index+1}</b><Todo todo={todo} key={index}/></div> ):''} </div>
  )
}

export default Tasklist