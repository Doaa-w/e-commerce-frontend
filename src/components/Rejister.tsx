/* eslint-disable prettier/prettier */
import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import {Button} from "@mui/material";


const Rejister = () =>{
    const ariaLabel = { 'aria-label': 'description' };

return (
   
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }} className='p-28'>
    <h1 className='mb-20'>Rejister</h1>
    <Input placeholder="Name" inputProps={ariaLabel} />
    <Input placeholder="email" inputProps={ariaLabel} />
    <Input type='password' placeholder="password" inputProps={ariaLabel} />
    <Input type='password' placeholder="confirm the password" inputProps={ariaLabel} />
    <Button variant="contained" size="small">Rejister</Button>
    </Box>

)
}
export default Rejister