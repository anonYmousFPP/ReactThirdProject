import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Content = () => {
const[name, setName] = useState("")
const[email, setEmail] = useState("")
const[data, setData] = useState([]);
    const addData = () => {
        setData([...data, {name, email}])
        setName("");
        setEmail("");
    }

    const removeItem = (index) => {
        let arr = data;
        arr.splice(index, 1);
        setData([...arr]);
    }

  return (
    <>
        <div className='main'>
        <Stack direction="row" spacing={2}>
            <TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
            <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="Enter Your Email" variant="outlined" />
            <Button onClick={addData} variant="contained" color="success">
                <AddIcon/>
            </Button>
        </Stack>
        </div>


        {/* Data */}
        <div className='data'>
        <div className='data_val'>
            <h3>Date</h3>
            <h3>Task</h3>
            <h3>Remove</h3>
        </div>
        {
            data.map((element, index) => {
                return (
                    <div key={index} className='data_val'>
                        <h4>{element.name}</h4>
                        <h4>{element.email}</h4>
                        <Stack>
                        <Button onClick={removeItem} variant="contained" color="error">
                            <DeleteIcon/>
                        </Button>
                        </Stack>
                    </div>
                )
            })
        }
        </div>
    </>
  )
}

export default Content