import { useState } from 'react';
import './App.css';
import MyInput from './components/MyInput';
import TodoList from './components/ToDoList';



function App() {

  const [list,setList] = useState([]);

  const addText = (text)=>{
    setList([...list, {title: text, done: false}])
    console.log(list);
  }

  const deleteItem = (index)=>{
    list.splice(index,1)
    setList([...list])
  }

  const isDone = (index)=>{
    list[index].done = true; 
    setList([...list]);
  }

  return (
    <div className='main-container'>
      <MyInput handleAdd={addText}/>
      <TodoList data={list} handleDelete={deleteItem} handleDone={isDone}/>
    </div>
  );
}

export default App;
