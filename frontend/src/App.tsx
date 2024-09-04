import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, List, ListItem, ListItemText } from '@mui/material';
import RoleOverview from './components/RoleOverview';
import RoleDetails from './components/RoleDetails';
import { backend } from '../declarations/backend';

interface Role {
  name: string;
  description: string;
}

const App: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const result = await backend.getRoles();
        setRoles(result);
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRoles();
  }, []);

  return (
    <div className="app-container">
      <AppBar position="static" className="header">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="text-white no-underline">
              Final Fantasy XIV Roles
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="flex">
        <Container className="mt-4 flex-grow">
          <Routes>
            <Route path="/" element={<RoleOverview />} />
            <Route path="/role/:roleName" element={<RoleDetails />} />
          </Routes>
        </Container>

        <div className="role-list">
          <Typography variant="h6" className="text-white mb-2">Roles</Typography>
          <List>
            {roles.map((role) => (
              <ListItem key={role.name} className="role-list-item">
                <Link to={`/role/${role.name}`} className="text-white no-underline">
                  <ListItemText primary={role.name} />
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </div>

      <footer className="text-center py-4 text-white">
        <Typography variant="body2">
          &copy; 2023 FF14 Role Guide. Background image from 
          <a href="https://unsplash.com/photos/waterfalls-at-daytime-zNN6ubHmruI" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100"> Unsplash</a>.
        </Typography>
      </footer>
    </div>
  );
};

export default App;