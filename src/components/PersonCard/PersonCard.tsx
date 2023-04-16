import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import theme from '../../theme';
import { Person } from '../../interfaces/Person';

const useStyles = makeStyles(() => ({
  card: {
    "&.css-t0s98n-MuiPaper-root-MuiCard-root": {
      backgroundColor: theme.palette.primary.main,
    },
    color: theme.palette.text.primary,
    borderRadius: 16,
    maxWidth: 400,
    margin: 16,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: theme.palette.secondary.main
  },
  info: {
    fontSize: 18,
    marginBottom: 8,
  },
}));

interface PersonCardProps {
  person: Person;
}

export const PersonCard = ({ person }: PersonCardProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={`${classes.card}`}>
      <Link to={`/characters/${person.url.split('/').reverse()[1]}`} state={person} style={{ textDecoration: 'none', color: 'inherit' }} >
        <CardContent>
          <Typography className={classes.title}>{person.name}</Typography>
          <Typography className={classes.info}>Height: {person.height}</Typography>
          <Typography className={classes.info}>Mass: {person.mass}</Typography>
          <Typography className={classes.info}>Hair color: {person.hair_color}</Typography>
          <Typography className={classes.info}>Skin color: {person.skin_color}</Typography>
          <Typography className={classes.info}>Eye color: {person.eye_color}</Typography>
          <Typography className={classes.info}>Birth year: {person.birth_year}</Typography>
          <Typography className={classes.info}>Gender: {person.gender}</Typography>
        </CardContent>
      </Link>
    </Card>
  );
};
