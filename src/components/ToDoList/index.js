import '../ToDoList/style.css';

function TodoList({data,handleDelete,handleDone}){


    return(
        <div className='container'>
            {
                data.map((item,index)=>(
                    <div key={index.toString()}>
                        <span style={{background: item.done?'#00FA9A':'white'}}>{item.title}</span>
                        <button className='button' onClick={()=>{
                            handleDelete(index)
                        }}>X</button>
                        <button className='button' onClick={()=>{
                            handleDone(index)
                        }}>done</button>
                    </div>
                ))
            }
        </div>
    )
}
export default TodoList;