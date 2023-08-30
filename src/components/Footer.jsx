import React from 'react';
import { Box,Stack,Typography } from '@mui/material';

import Logo from '../../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" sx={{alignItems : "center"}} px='40px' pt="24px">
        <img src={Logo} alt="Gym" width="200px" height="40px"/>
        <Typography variant='h5' pb="40px" mt="0px">
        Made with ❤️ by <a href='https://github.com/Divyank1289' target='blank' style={{textDecoration: 'none',color:'#000'}}>Divyank Trivedi. </a>
      </Typography>
      </Stack>
      

    </Box>
  )
}

export default Footer