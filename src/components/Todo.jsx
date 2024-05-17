import React, { useState, useEffect  } from 'react';
import TodoList from './TodoList';
import { Container, Box, Card, CardContent, Typography, TextField, IconButton, List } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import todoListData from '../JsonFiles/todoList.json'

const Todo = () => {
  const [inputList, setInputList] = useState("");
  const [action, setAction] = useState("add");
  const [editData, setEditData] = useState(null);
  const [items, setItems] = useState([]);
  const Swal = require('sweetalert2')
  
  useEffect(() => {
    const savedItems = localStorage.getItem('todoList');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    } else {
      setItems(todoListData?.todoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(items));
  }, [items]);

const formatDate = (date) => new Date(date).toLocaleString('en-GB', { hour12: false });

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const handleAddItem = () => {
    if(inputList){
    let newItem ={
			"id": action === "update" ? editData?.id : new Date().getTime(),
			"title": inputList,
			"active": true,
			"status": "inprogress",
			"updatedTime": formatDate(new Date()),
			"createdTime": action === "update" ? editData?.createdTime : formatDate(new Date())
		}
    action === "update" ?
    setItems((oldItems) => 
      oldItems.map((i) => 
        i.id === editData.id ? newItem : i
      )
    )
    :
    setItems((oldItems) => {
      return [...oldItems, newItem];
    });
    Swal.fire(action === "update" ? "Todo update successfully!" : "Todo added successfully", "", "success");
    setInputList('');
    setAction('');
    setEditData(null)
  } else{
    Swal.fire("Please add todo's title!", "", "warning");
  }
  };

  const handleEdit = (item) => {
    setAction('update')
    setInputList(item.title)
    setEditData(item)
  };

  const handleComplete = (item) => {
    const newItem = {
      id: item.id,
      title: item.title,
      active: item.active,
      status: "completed",
      updatedTime: formatDate(new Date()),
      createdTime: item.createdTime
    };

    Swal.fire({
      title: "Do you want to complete the todo?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setItems((oldItems) => 
          oldItems.map((i) => 
            i.id === item.id ? newItem : i
          )
        );
        Swal.fire("Completed!", "", "success");
      }
    });
  };

  const handleDelete = (item) => {
    const newItem = {
      id: item.id,
      title: item.title,
      active: item.active,
      status: "deleted",
      updatedTime: formatDate(new Date()),
      createdTime: item.createdTime
    };

    Swal.fire({
      title: "Do you want to delete the todo?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setItems((oldItems) => 
          oldItems.map((i) => 
            i.id === item.id ? newItem : i
          )
        );
        Swal.fire("Deleted!", "", "success");
      }
    });
  };
  

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: 5 }}>
      <Card variant="outlined" sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Todo List
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 3 }}>
            <TextField
              variant="outlined"
              size="small"
              value={inputList}
              placeholder="Add Items"
              onChange={itemEvent}
              sx={{ marginRight: 1 }}
            />
            <IconButton color="primary" onClick={handleAddItem}>
              <AddIcon />
            </IconButton>
          </Box>
          <List sx={{maxHeight: '65vh', overflowX: 'hidden'}}>
            {items?.map((itemval, index) => (
              <TodoList
                item={itemval}
                key={index}
                id={index}
                handleEdit={handleEdit}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
              />
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Todo;
