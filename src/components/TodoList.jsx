import React from "react";
import todoList from '../JsonFiles/todoList.json'
import { ListItem, ListItemText, IconButton, Button, Menu, MenuItem, Box, Typography  } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const TodoList = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ListItem
    disabled={props?.item?.status == "deleted" ? true : false}
      sx={{
        boxShadow: 1,
        margin: 1,
        width: "97%",
        borderRadius: 1,
        bgcolor: "background.paper",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {props?.item?.status =="inprogress"?
            <RadioButtonUncheckedIcon color='info' />
            :props?.item?.status == "completed"?
            <CheckCircleIcon color='success' />
            :<CancelOutlinedIcon color='error' />
            }
          </ListItemIcon>
          <Box>
          <Typography variant="body1">{props?.item?.title}</Typography>
          <Typography variant="body2" style={{ fontSize: '9px', color: 'secondary' }}>
            {props?.item?.updatedTime}
          </Typography>
        </Box>
        </ListItemButton>
        {props?.item?.status =="inprogress"?
        <>
        <IconButton
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={(e)=>props.handleEdit(props?.item)}>Edit</MenuItem>
        <MenuItem onClick={(e)=>props.handleComplete(props?.item)}>Complete</MenuItem>
        <MenuItem onClick={(e)=>props.handleDelete(props?.item)}>Delete</MenuItem>
      </Menu>
      </>
      :''}
      </ListItem>
    </ListItem>
  );
};

export default TodoList;
