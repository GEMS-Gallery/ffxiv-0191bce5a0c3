import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { backend } from '../../declarations/backend';

interface RoleDetails {
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  specialAbilities?: string[];
}

const RoleDetails: React.FC = () => {
  const { roleName } = useParams<{ roleName: string }>();
  const [roleDetails, setRoleDetails] = useState<RoleDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoleDetails = async () => {
      if (roleName) {
        try {
          const result = await backend.getRoleDetails(roleName);
          if (result) {
            setRoleDetails(result);
          }
          setLoading(false);
        } catch (error) {
          console.error('Error fetching role details:', error);
          setLoading(false);
        }
      }
    };

    fetchRoleDetails();
  }, [roleName]);

  if (loading) {
    return <div className="loading-spinner mx-auto mt-8"></div>;
  }

  if (!roleDetails) {
    return <Typography>Role not found</Typography>;
  }

  return (
    <Card className="role-card">
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom>
          {roleDetails.name}
        </Typography>
        <Typography variant="body1" paragraph>
          {roleDetails.description}
        </Typography>

        <Typography variant="h6" gutterBottom>
          Pros
        </Typography>
        <List>
          {roleDetails.pros.map((pro, index) => (
            <ListItem key={index}>
              <ListItemText primary={pro} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" gutterBottom>
          Cons
        </Typography>
        <List>
          {roleDetails.cons.map((con, index) => (
            <ListItem key={index}>
              <ListItemText primary={con} />
            </ListItem>
          ))}
        </List>

        {roleDetails.specialAbilities && (
          <>
            <Typography variant="h6" gutterBottom>
              Special Abilities
            </Typography>
            <List>
              {roleDetails.specialAbilities.map((ability, index) => (
                <ListItem key={index}>
                  <ListItemText primary={ability} />
                </ListItem>
              ))}
            </List>
          </>
        )}

        <Button component={Link} to="/" variant="contained" color="primary" className="mt-4">
          Back to Overview
        </Button>
      </CardContent>
    </Card>
  );
};

export default RoleDetails;