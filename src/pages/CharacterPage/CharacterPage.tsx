import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../theme';
import { Person } from '../../interfaces/Person';
import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    borderRadius: 16,
    maxWidth: 400,
    margin: 16,
    padding: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    "&.css-t0s98n-MuiPaper-root-MuiCard-root": {
      backgroundColor: theme.palette.primary.main,
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
  button: {
    marginTop: 16,
    display: 'block',
    margin: '0 auto',
    marginBottom: 16,
  },
}));

const updatePersonInLocalStorage = (person: Person): void => {
  localStorage.setItem(`person_${person.name}`, JSON.stringify(person));
};

export const CharacterPage = (): JSX.Element => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [person, setPerson] = useState<Person>(state as Person);
  const [height, setHeight] = useState<string>(person.height);
  const [mass, setMass] = useState<string>(person.mass);
  const [hairColor, setHairColor] = useState<string>(person.hair_color);
  const [skinColor, setSkinColor] = useState<string>(person.skin_color);
  const classes = useStyles();

  useEffect(() => {
    setPerson(state);
    setHeight(person.height);
    setMass(person.mass);
    setHairColor(person.hair_color);
    setSkinColor(person.skin_color);
  }, [state, person.hair_color, person.mass, person.skin_color, person.height]);

  const isPersonUnchanged = useMemo(
    () =>
      person.height === height &&
      person.mass === mass &&
      person.hair_color === hairColor &&
      person.skin_color === skinColor,
    [person, height, mass, hairColor, skinColor]
  );
  const handleUpdate = (): void => {
    if (isPersonUnchanged) {
      navigate('/');
      return;
    }
    const updatedPerson = { ...person, height, mass, skin_color: skinColor, hair_color: hairColor };
    updatePersonInLocalStorage(updatedPerson);
    navigate('/');
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12}>
            <Typography className={classes.title}>{person.name}</Typography>
          </Grid>
          <Grid item={true} xs={12}>
            <TextField label="Height" value={height} onChange={setHeight} data-testid="height-input" />
            <TextField label="Mass" value={mass} onChange={setMass} data-testid="mass-input" />
            <TextField label="Hair Color" value={hairColor} onChange={setHairColor} data-testid="hair-color-input" />
            <TextField label="Skin Color" value={skinColor} onChange={setSkinColor} data-testid="skin-color-input" />
          </Grid>
        </Grid>
      </CardContent>
      <Button onClick={handleUpdate} />
    </Card>
  );
};
