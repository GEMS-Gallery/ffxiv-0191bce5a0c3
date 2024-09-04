import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { backend } from '../../declarations/backend';

interface ClassDetails {
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  specialAbilities?: string[];
}

const ClassDetails: React.FC = () => {
  const { className } = useParams<{ className: string }>();
  const [classDetails, setClassDetails] = useState<ClassDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClassDetails = async () => {
      if (className) {
        try {
          const result = await backend.getClassDetails(className);
          if (result) {
            setClassDetails(result);
          }
          setLoading(false);
        } catch (error) {
          console.error('Error fetching class details:', error);
          setLoading(false);
        }
      }
    };

    fetchClassDetails();
  }, [className]);

  if (loading) {
    return <div className="loading-spinner mx-auto mt-8"></div>;
  }

  if (!classDetails) {
    return <Typography>Class not found</Typography>;
  }

  return (
    <Card className="class-card">
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom>
          {classDetails.name}
        </Typography>
        <Typography variant="body1" paragraph>
          {classDetails.description}
        </Typography>

        <Typography variant="h6" gutterBottom>
          Pros
        </Typography>
        <List>
          {classDetails.pros.map((pro, index) => (
            <ListItem key={index}>
              <ListItemText primary={pro} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" gutterBottom>
          Cons
        </Typography>
        <List>
          {classDetails.cons.map((con, index) => (
            <ListItem key={index}>
              <ListItemText primary={con} />
            </ListItem>
          ))}
        </List>

        {classDetails.specialAbilities && (
          <>
            <Typography variant="h6" gutterBottom>
              Special Abilities
            </Typography>
            <List>
              {classDetails.specialAbilities.map((ability, index) => (
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

export default ClassDetails;