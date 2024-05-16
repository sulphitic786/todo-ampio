import React, {useState} from 'react';
import { DeleteForever } from '@material-ui/icons';


const TodoList2 = (props) => {

    const [line, setLine] = useState(false);
    const cutIt = () =>{
        setLine(true);
    };
    
    return(
    <>
     <li className="list-unstyled fw-bold shadow w-75 m-1 list" style= {{textDecoration: line ? 'line-through' : 'none'}}><span className="btn del" onClick = {cutIt}><DeleteForever /> </span> {props.text} </li>
     
    </>
    )};

export default TodoList2;