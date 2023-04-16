import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
  const setPageMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<Pagination count={100} currentPage={1} setCurrentPage={setPageMock} />);
  });

  it('renders correct number of pages', () => {
    render(<Pagination count={100} perPage={10} currentPage={1} setCurrentPage={setPageMock} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('list')).toHaveClass('MuiPagination-ul');
  });

  it('displays correct active page', () => {
    const currentPage = 5;
    render(<Pagination count={100} perPage={10} currentPage={currentPage} setCurrentPage={setPageMock} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('changes page on click', () => {
    const currentPage = 5;
    render(<Pagination count={100} perPage={10} currentPage={currentPage} setCurrentPage={setPageMock} />);
    const nextPageButton = screen.getByLabelText('Go to page 6');
    expect(nextPageButton).toBeInTheDocument();
    fireEvent.click(nextPageButton);
    expect(setPageMock).toHaveBeenCalledWith(6);
  });
});
