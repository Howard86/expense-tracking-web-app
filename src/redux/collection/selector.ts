import type { RootState } from '../store';
import type { CollectionStates } from './slice';

export const selectCollection = (state: RootState): CollectionStates =>
  state.collection;
