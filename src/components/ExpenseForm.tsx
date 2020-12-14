import React, { FC } from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  VStack,
  Input,
} from '@chakra-ui/react';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';

interface FormValues {
  category: string;
  name: string;
  date: string;
  cost: number;
}

const initialValues: FormValues = {
  category: '伙食費',
  name: '午餐',
  date: new Date().toISOString().slice(0, 10),
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
  // TODO: update handleOnSubmit
  const handleOnSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ): void => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
      actions.setValues(initialValues);
    }, 1000);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
      {({ isSubmitting }) => (
        <VStack as={Form} spacing={4}>
          <Field name="date" validate={validateString}>
            {({ field, form }: FieldProps<string, FormValues>) => (
              <FormControl isInvalid={form.errors.date && form.touched.date}>
                <FormLabel htmlFor="date">日期</FormLabel>
                <Input {...field} type="date" id="date" placeholder="date" />
                <FormErrorMessage>{form.errors.date}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="category" validate={validateString}>
            {({ field, form }: FieldProps<string, FormValues>) => (
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
            {({ field, form }: FieldProps<string, FormValues>) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">細項</FormLabel>
                <Input {...field} id="name" placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="cost" validate={validateNumber}>
            {({ field, form }: FieldProps<number, FormValues>) => (
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
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default ExpenseForm;
