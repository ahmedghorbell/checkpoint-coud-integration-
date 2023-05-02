import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const GreenAppBar = styled(AppBar)({
  background: 'green',
});

const Navigation = () => {
  return (
    <GreenAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Map App
        </Typography>
      </Toolbar>
    </GreenAppBar>
  );
};

export default Navigation;