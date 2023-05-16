import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from 'redux/store';

type DispatchFunk = () => AppDispatch;

export const useAppDispatch: DispatchFunk = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
