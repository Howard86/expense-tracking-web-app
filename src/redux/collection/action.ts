import type { Expense } from '@/components/ExpenseForm';
import type { AppThunk } from '../store';
import { getCollection } from '../firebase';
import { add, fetchFresh } from './slice';

export const addExpense = (
  expense: Expense,
): AppThunk<Promise<boolean>> => async (dispatch, getState) => {
  const { user } = getState();

  if (!user.userData || !user.isLoggedIn) {
    return false;
  }

  const collection = getCollection(user.userData.email, 'expense');

  try {
    await collection.add(expense);
    dispatch(add(expense));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getAllExpense = (): AppThunk => async (
  dispatch,
  getState,
): Promise<boolean> => {
  const { user } = getState();

  if (!user.userData || !user.isLoggedIn) {
    return false;
  }

  const collection = getCollection(user.userData.email, 'expense');

  try {
    const result = await collection.orderBy('date', 'desc').limit(10).get();

    if (result.size === 0) {
      throw new Error('no document found');
    }
    const expenses = result.docs.map((result) => result.data() as Expense);
    dispatch(fetchFresh(expenses));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
