import React, {useState} from 'react';
import TodoList2 from './TodoList2';

const Todo2 = () => {

    const  [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('');
    };

    const delItem = (id) =>{
        console.log("Delete");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !==id;
            });
        }); 

    };

    return(
    <div className="container text-center app-main">
    <div className="col-md-6 offset-md-4 offset-sm-3 text-center">
    <div className="card mt-5 shadow-lg" style={{width: '18rem'}}>
    <div className="card-body">
    <h5 className="card-title fw-bold title">Todo List 2nd</h5><hr />
    <input type="text" value={inputList} className="card-text shadow mx-1 card-input" placeholder="Add Items" onChange={itemEvent} />
    <a href="#" className=" add-btn " onClick ={listOfItems}>+ </a>
    <ul className="card-text text-start">
        
        {items.map((itemval, index) => {
           return <TodoList2
            text={itemval}
            key ={index}
            id ={index}
            onSelect = {delItem} />
        }
        )}
    </ul>
  </div>
</div>
    </div>
    </div>
    );
};

export default Todo2;