import { useState } from 'react';
import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import theme from '../../theme';

export interface FilterValues {
  gender: string,
  hairColor: string,
  skinColor: string,
  eyeColor: string
}

interface FilterProps {
  onFilterChange: (newFilters: FilterValues) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      color: theme.palette.secondary.main,
    },
    filterContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: theme.spacing(2),
    },
    selectLabel: {
      color: theme.palette.secondary.main,
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    select: {
      minWidth: 120,
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
    },
  })
);

export const Filter = ({ onFilterChange }: FilterProps): JSX.Element => {
  const classes = useStyles();
  const [filters, setFilters] = useState<FilterValues>({
    gender: '',
    hairColor: '',
    skinColor: '',
    eyeColor: ''
  });

  const handleFilterChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>): void => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      [name!]: value as string,
    }));
    onFilterChange({
      ...filters,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      [name!]: value as string,
    });
  };

  return (
    <div className={classes.filterContainer}>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.selectLabel} id="gender-select-label" htmlFor="gender-select">Gender</InputLabel>
        <Select aria-labelledby="gender-select-label"
          data-testid="gender-select" className={classes.select} value={filters.gender} onChange={handleFilterChange} name="gender">
          <MenuItem value="">All</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="n/a">N/A</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.selectLabel}>Hair Color</InputLabel>
        <Select className={classes.select} value={filters.hairColor} onChange={handleFilterChange} name="hairColor">
          <MenuItem value="">All</MenuItem>
          <MenuItem value="blond">Blond</MenuItem>
          <MenuItem value="brown">Brown</MenuItem>
          <MenuItem value="black">Black</MenuItem>
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="white">White</MenuItem>
          <MenuItem value="grey">Grey</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.selectLabel}>Skin Color</InputLabel>
        <Select className={classes.select} value={filters.skinColor} onChange={handleFilterChange} name="skinColor">
          <MenuItem value="">All</MenuItem>
          <MenuItem value="fair">Fair</MenuItem>
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
          <MenuItem value="pale">Pale</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.selectLabel}>Eye Color</InputLabel>
        <Select className={classes.select} value={filters.eyeColor} onChange={handleFilterChange} name="eyeColor">
          <MenuItem value="">All</MenuItem>
          <MenuItem value="black">Black</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
          <MenuItem value="brown">Brown</MenuItem>
          <MenuItem value="gold">Gold</MenuItem>
          <MenuItem value="green">Green</MenuItem>
          <MenuItem value="grey">Grey</MenuItem>
          <MenuItem value="hazel">Hazel</MenuItem>
          <MenuItem value="orange">Orange</MenuItem>
          <MenuItem value="pink">Pink</MenuItem>
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="yellow">Yellow</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
};

