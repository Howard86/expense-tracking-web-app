import type { RootState } from '../store';
import type { UserStates } from './slice';

export const selectUser = (state: RootState): UserStates => state.user;
