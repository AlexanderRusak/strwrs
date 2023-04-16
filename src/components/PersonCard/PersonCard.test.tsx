import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PersonCard } from './PersonCard';
import { Person } from '../../interfaces/Person';

describe('PersonCard', () => {
  const person: Person = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    url: 'https://swapi.dev/api/people/1/',
    homeworld: '',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: '',
    edited: ''
  };

  test('renders person card with correct info', () => {
    render(
      <MemoryRouter>
        <PersonCard person={person} />
      </MemoryRouter>
    );

    expect(screen.getByText(person.name)).toBeInTheDocument();
    expect(screen.getByText(`Height: ${person.height}`)).toBeInTheDocument();
    expect(screen.getByText(`Mass: ${person.mass}`)).toBeInTheDocument();
    expect(screen.getByText(`Hair color: ${person.hair_color}`)).toBeInTheDocument();
    expect(screen.getByText(`Skin color: ${person.skin_color}`)).toBeInTheDocument();
    expect(screen.getByText(`Eye color: ${person.eye_color}`)).toBeInTheDocument();
    expect(screen.getByText(`Birth year: ${person.birth_year}`)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${person.gender}`)).toBeInTheDocument();
  });

  test('renders link to character details page', () => {
    render(
      <MemoryRouter>
        <PersonCard person={person} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', `/characters/1`);
  });
});
