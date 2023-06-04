import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './Actions/action';
import { useState } from 'react';

function App() {

  const [counter,setCounter]=useState(0);
  const [todo,setTodo]=useState("");
  const todos=useSelector(state=>state.todos);
  const dispatch=useDispatch();

  const todoSubmitHandler=()=>{
    if(todo!==""){
      dispatch(addTodo(counter,todo))
    setCounter(counter+1);
    setTodo("");
    }
  }

  return (
    <div>
      <h1>TODOS</h1>
      <div className='todo'>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>  
      </div>
      <button onClick={todoSubmitHandler}>ADD</button>    
      <div className='todos'>
        <ul>
          {
            todos?.map((todo)=>(
              <li key={todo.id}><p>{todo.task}</p>
              <button onClick={()=> dispatch(removeTodo(todo.id))}>Remove</button></li>
            ))
          }
        </ul>
        </div>  
    </div>
  );
}

export default App;
