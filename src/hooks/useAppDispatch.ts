import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { AnyAction } from '@reduxjs/toolkit';

export const useAppDispatch = (): ThunkDispatch<RootState, unknown, AnyAction> => useDispatch();
