import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { backend } from '../../declarations/backend';

interface Role {
  name: string;
  description: string;
}

const RoleOverview: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const result = await backend.getRoles();
        setRoles(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching roles:', error);
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  if (loading) {
    return <div className="loading-spinner mx-auto mt-8"></div>;
  }

  return (
    <Grid container spacing={4}>
      {roles.map((role) => (
        <Grid item xs={12} sm={6} md={4} key={role.name}>
          <Link to={`/role/${role.name}`} className="no-underline">
            <Card className="role-card h-full">
              <CardContent>
                <div className="role-icon mb-2">{role.name[0]}</div>
                <Typography variant="h5" component="div">
                  {role.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {role.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default RoleOverview;