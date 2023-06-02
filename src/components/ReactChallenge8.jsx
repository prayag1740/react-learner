import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export default function ReactChallenge8() {

    const [count, setCount] = useState(0) ;

    const IncrementCount = () => {
        setCount(count + 1) ;    
    }

    const DecrementCount = () => {
        if (count === 0) {
            alert('Sorry zero limit reached');
            return ;
        }

        setCount(count - 1) ;    
    }

    return (
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1>{count}</h1>
                <br />
                <Stack style={{marginLeft: "30px"}} direction="row" spacing={2}>
                <Button variant="contained" size="small"  onClick={IncrementCount}> <AddIcon /> </Button>
                <Button variant="contained"  onClick={DecrementCount}> <RemoveIcon /> </Button>
                </Stack>
            </div>
        </div>
      )
}
