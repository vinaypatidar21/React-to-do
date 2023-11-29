import './App.css';
import Header from "./Mycomponents/Header";
import {Footer} from "./Mycomponents/Footer";
import {Todos} from "./Mycomponents/Todos";
import React, { useState } from 'react';



function App() {
  const onDelete = (todo)=>{
    console.log("Deleted",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
    const[todos , setTodos]=useState( [{
    sno: 1,
    title:"Go to gym",
    desc: "You need to go to gym "
  },
  {
    sno: 2,
    title:"Go to library",
    desc: "You need to go to library "
  },
  {
    sno: 1,
    title:"Go to temple",
    desc: "You need to go to temple "
  }
 ]);
  return (
  <>
  <Header title="MyTodosList"/>
  <Todos todos={todos} onDelete={onDelete}/>
  <Footer/>
 


  </>
  );
}

export default App;
