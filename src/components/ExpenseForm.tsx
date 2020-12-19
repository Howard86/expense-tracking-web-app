import React, { FC } from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  VStack,
  Input,
  useToast,
} from '@chakra-ui/react';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useAppDispatch } from '@/redux/store';
import { selectUser } from '@/redux/user';
import { addExpense, Expense } from '@/redux/collection';

const initialValues: Expense = {
  category: '伙食費',
  name: '午餐',
  timestamp: dayjs().unix(),
  cost: 2,
};

const validateString = (value?: string): string =>
  value ? '' : 'This is required';

const validateNumber = (value?: number): string => {
  if (!value) {
    return 'Cost is required';
  }

  return value < 0 || value > 999999 ? 'Cost is out of range ' : '';
};

const ExpenseForm: FC = () => {
  const dispatch = useAppDispatch();
  const { userData } = useSelector(selectUser);
  const toast = useToast({ duration: 3000, position: 'bottom' });

  // TODO: update handleOnSubmit
  const handleOnSubmit = async (
    values: Expense,
    actions: FormikHelpers<Expense>,
  ): Promise<void> => {
    const isSuccess = await dispatch(addExpense(values));

    if (isSuccess) {
      actions.setValues(initialValues);
      toast({
        title: 'Submit Success',
        status: 'success',
      });
    } else {
      toast({
        title: 'Something went wrong!',
        status: 'error',
      });
    }
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
      {({ isSubmitting }) => (
        <VStack as={Form} spacing={4}>
          <Field name="timestamp" validate={validateString}>
            {({ field, form }: FieldProps<number, Expense>) => (
              <FormControl
                isInvalid={form.errors.timestamp && form.touched.timestamp}
              >
                <FormLabel htmlFor="timestamp">日期</FormLabel>
                <Input
                  {...field}
                  type="date"
                  id="timestamp"
                  placeholder="timestamp"
                />
                <FormErrorMessage>{form.errors.timestamp}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="category" validate={validateString}>
            {({ field, form }: FieldProps<string, Expense>) => (
              <FormControl
                isInvalid={form.errors.category === '' && form.touched.category}
              >
                <FormLabel htmlFor="category">類別</FormLabel>
                <Input {...field} id="category" placeholder="category" />
                <FormErrorMessage>{form.errors.category}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="name" validate={validateString}>
            {({ field, form }: FieldProps<string, Expense>) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">細項</FormLabel>
                <Input {...field} id="name" placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="cost" validate={validateNumber}>
            {({ field, form }: FieldProps<number, Expense>) => (
              <FormControl isInvalid={form.errors.cost && form.touched.cost}>
                <FormLabel htmlFor="cost">開銷</FormLabel>
                <Input {...field} id="cost" placeholder="cost" type="number" />
                <FormErrorMessage>{form.errors.cost}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="blue"
            type="submit"
            isLoading={isSubmitting}
            isDisabled={typeof userData === 'undefined'}
          >
            Submit
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default ExpenseForm;
