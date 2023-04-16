import starWarsReducer, { fetchPeople, StarWarsState } from './peopleReducers';

describe('starWarsSlice', () => {
  let state: StarWarsState;

  beforeEach(() => {
    state = {
      people: null,
      status: 'idle',
      error: null,
    };
  });

  describe('fetchPeople', () => {
    it('should set the status to "loading" when called', () => {
      const action = { type: fetchPeople.pending.type };
      const nextState = starWarsReducer(state, action);
      expect(nextState.status).toBe('loading');
    });

    it('should set the status to "succeeded" and the people data when fulfilled', () => {
      const mockData = { results: [] };
      const action = { type: fetchPeople.fulfilled.type, payload: mockData };
      const nextState = starWarsReducer(state, action);
      expect(nextState.status).toBe('succeeded');
      expect(nextState.people).toBe(mockData);
    });

    it('should set the status to "failed" and the error message when rejected', () => {
      const mockError = { message: 'Network Error' };
      const action = { type: fetchPeople.rejected.type, error: mockError };
      const nextState = starWarsReducer(state, action);
      expect(nextState.status).toBe('failed');
      expect(nextState.error).toBe(mockError.message);
    });
  });
});
