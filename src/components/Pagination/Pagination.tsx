import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Pagination as MuiPagination } from '@mui/material';


interface PaginationProps {
  count: number;
  perPage?: number;
  currentPage: number;
  setCurrentPage: (React.Dispatch<React.SetStateAction<number>>)
}

export const Pagination = ({ count, perPage = 10, currentPage, setCurrentPage }: PaginationProps): JSX.Element => {
  const totalPages = Math.ceil(count / perPage);
  const theme = useTheme();


  const handleChangePage = (pageNumber: number): void => {
    pageNumber && setCurrentPage(pageNumber)
  };

  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={(_, value) => handleChangePage(value)}
      sx={{
        mt: 2,
        display: 'flex',
        justifyContent: 'center',
        '& .MuiPagination-ul': {
          color: theme.palette.primary.main,
        },
        '& .Mui-selected': {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        '& .Mui-selected:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      }}
    />
  );
};
