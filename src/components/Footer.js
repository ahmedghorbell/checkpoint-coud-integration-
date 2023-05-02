import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f8f8f8', color: '#333' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
          <Typography variant="body2" component="span">
            © 2023 Map App. All rights reserved.
          </Typography>
          <Typography variant="body2" component="span">
            Terms of Service | Privacy Policy
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
