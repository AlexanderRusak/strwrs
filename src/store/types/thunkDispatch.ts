import { ThunkAction, ThunkDispatch as ReduxThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export type ThunkDispatch = ReduxThunkDispatch<RootState, unknown, Action<string>>;
