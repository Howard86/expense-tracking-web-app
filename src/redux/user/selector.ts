import type { RootState } from '../store';
import type { UserProps } from './slice';

export const selectUser = (state: RootState): UserProps => state.user;
