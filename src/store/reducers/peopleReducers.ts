import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { People } from 'interfaces/People';

export interface StarWarsState {
  people: People | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: StarWarsState = {
  people: null,
  status: 'idle',
  error: null,
};


export const fetchPeople = createAsyncThunk('starWars/fetchPeople', async (value: number | string) => {
  const url = 'https://swapi.dev/api/people/';
  const type = typeof value === 'string' ? '?search=' : '?page=';
  const response = await fetch(url + `${type}${value}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
});



export const starWarsSlice = createSlice({
  name: 'starWars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {

        state.status = 'succeeded';
        state.people = action.payload;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});
export default starWarsSlice.reducer;
