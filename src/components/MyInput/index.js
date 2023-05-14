import { useState } from 'react';
import '../MyInput/style.css';

function MyInput({handleAdd}){
    const [inputValue,setInputValue] = useState('');
   

    return(
        <div className="input-button">
            <input type="text" value={inputValue} onChange={(event)=>{
                setInputValue(event.target.value)
            }}/>
            <button className='addButt' onClick={()=>{
                handleAdd(inputValue);
                setInputValue('')
            }}>add</button>
        </div>
    )
}
export default MyInput;