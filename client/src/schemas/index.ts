import * as yup from 'yup';

const loginSchemaShape = {
  email: yup
    .string()
    .required('Email is required')
    .email('Email must be valid')
    .matches(/\.[a-z]{2,}$/, 'Must contain a domain'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'At least 6 characters')
    .matches(/\p{Lu}/u, 'Must have a uppercased letter')
    .matches(/\p{Ll}/u, 'Must have a lowered letter')
    .matches(/[0-9]+/, 'Must have a number'),
};

export const loginSchema = yup.object().shape(loginSchemaShape);
