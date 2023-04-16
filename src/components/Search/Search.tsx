import React, { useEffect, useState } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { useDebounce } from '../../hooks/useDebounce';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.light,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.light,
    },
  },
  searchIcon: {
    color: theme.palette.secondary.main,
    marginRight: theme.spacing(1),
  },
  placeholder: {
    color: theme.palette.secondary.main,
  },
  clearButton: {
    cursor: 'pointer',
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.secondary.dark,
    },
  },
  input: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    '&.Mui-focused': {
      color: theme.palette.secondary.light,
      borderColor: theme.palette.secondary.light,
    },
    '&:hover:not(.Mui-focused)': {
      borderColor: theme.palette.secondary.main,
    },
  },
  label: {
    color: theme.palette.secondary.main,
    '&.Mui-focused': {
      color: theme.palette.secondary.light,
    },
  },
}));

type SearchInputProps = TextFieldProps & {
  // eslint-disable-next-line no-unused-vars
  onSearch: (query: string) => void;
  debounceTimeout?: number;
};

export const SearchInput = ({
  onSearch,
  debounceTimeout = 500,
}: SearchInputProps): JSX.Element => {
  const classes = useStyles();
  const [query, setQuery] = useState<string>('');

  const debouncedSearch = useDebounce<string>(query, debounceTimeout);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleClearButtonClick = (): void => {
    setQuery('');
  };

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <SearchIcon className={classes.searchIcon} />
        <TextField
          id="search-input"
          label="Find Character"
          variant="outlined"
          fullWidth={true}
          value={query}
          onChange={handleQueryChange}
          InputProps={{
            classes: {
              input: classes.input,
              notchedOutline: classes.input,
            },
            endAdornment: query && (
              <ClearIcon
                className={classes.clearButton}
                aria-label="Clear search input"
                onClick={handleClearButtonClick}
              />
            ),
          }}
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.label,
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
};
