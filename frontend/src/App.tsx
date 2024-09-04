import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import ClassOverview from './components/ClassOverview';
import ClassDetails from './components/ClassDetails';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <AppBar position="static" className="header">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="text-white no-underline">
              Final Fantasy XIV Classes
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<ClassOverview />} />
          <Route path="/class/:className" element={<ClassDetails />} />
        </Routes>
      </Container>

      <footer className="text-center py-4 text-white">
        <Typography variant="body2">
          &copy; 2023 FF14 Class Guide. Background image from 
          <a href="https://unsplash.com/photos/waterfalls-at-daytime-zNN6ubHmruI" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100"> Unsplash</a>.
        </Typography>
      </footer>
    </div>
  );
};

export default App;