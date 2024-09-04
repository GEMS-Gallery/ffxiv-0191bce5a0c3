import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { backend } from '../../declarations/backend';

interface Class {
  name: string;
  description: string;
}

const ClassOverview: React.FC = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const result = await backend.getClasses();
        setClasses(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching classes:', error);
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  if (loading) {
    return <div className="loading-spinner mx-auto mt-8"></div>;
  }

  return (
    <Grid container spacing={4}>
      {classes.map((classItem) => (
        <Grid item xs={12} sm={6} md={4} key={classItem.name}>
          <Link to={`/class/${classItem.name}`} className="no-underline">
            <Card className="class-card h-full">
              <CardContent>
                <div className="class-icon mb-2">{classItem.name[0]}</div>
                <Typography variant="h5" component="div">
                  {classItem.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {classItem.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ClassOverview;