import React, { useEffect, useMemo, useState, /* useState */ } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchPeople } from '../../store/reducers/peopleReducers';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Loader } from '../../components/Loader/Loader';
import { Grid } from '@mui/material';
import { PersonCard } from '../../components/PersonCard/PersonCard';
import { Error } from '../../components/Error/Error';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchInput } from '../../components/Search/Search';
import { NotFound } from '../../components/NotFound/NotFound';
import { Filter, FilterValues } from '../../components/Filter/Filter';
import { People } from '../../interfaces/People';

export const HomePage = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const { status, error, people } = useSelector(
    (state: RootState) => state.people
  );


  const [page, setPage] = useState(1);
  const [currentPeople, setCurrentPeople] = useState<People | null>(null)
  const [search, setSearch] = useState('');


  useEffect(() => {
    people && setCurrentPeople(people)
  }, [people])

  const handleFilterChange = (newFilters: FilterValues): void => {
    const filteredPeople = people?.results.filter((person) => {
      let includePerson = true;
      if (newFilters.gender) {
        includePerson = includePerson && person.gender === newFilters.gender;
      }
      if (newFilters.hairColor) {
        includePerson =
          includePerson && person.hair_color.includes(newFilters.hairColor);
      }
      if (newFilters.skinColor) {
        includePerson =
          includePerson && person.skin_color.includes(newFilters.skinColor);
      }
      if (newFilters.eyeColor) {
        includePerson =
          includePerson && person.eye_color.includes(newFilters.eyeColor);
      }
      return includePerson;
    });
    setCurrentPeople({
      count: filteredPeople?.length || 0,
      results: filteredPeople || [],
      next: null,
      previous: null,
    });
  };



  useEffect(() => {
    if (!search) {
      dispatch(fetchPeople(page));
      setCurrentPeople(people)
    }
  }, [page, search]);

  useEffect(() => {
    if (search) {
      dispatch(fetchPeople(search));
    } else {
      setPage(1)
    }
  }, [search]);


  const memoizedPeople = useMemo(() => {
    if (status === 'loading') {
      return <Loader />;
    }

    if (status === 'succeeded' && people) {
      return currentPeople && currentPeople.count ? currentPeople.results.map((person) => {
        const storedUser = localStorage.getItem(`person_${person.name}`)
        if (storedUser) {
          return <Grid item={true} xs={12} sm={6} md={4} key={person.url}>
            <PersonCard person={JSON.parse(storedUser)} />
          </Grid>
        }
        return <Grid item={true} xs={12} sm={6} md={4} key={person.url}>
          <PersonCard person={person} />
        </Grid>
      }) : <NotFound />
    }
  }, [currentPeople, status]);


  const memoizedPagination = useMemo(() => {
    return status === 'succeeded' && people && !search && people.count ?
      <Pagination
        count={people.count}
        currentPage={page}
        setCurrentPage={setPage}
      />
      : null
  }, [people, page, search, status]);


  const filterComponent = useMemo(() => {
    return search ? <Filter onFilterChange={handleFilterChange} /> : null
  }, [search])


  if (error) {
    return <Error message='Error' />
  }

  return (
    <>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12}>
          <SearchInput onSearch={setSearch} />
          {filterComponent}
        </Grid>
        {memoizedPeople}
      </Grid>
      {memoizedPagination}
    </>
  );
};
