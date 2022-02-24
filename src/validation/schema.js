
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username needs to be more than 3 letters'),
    email: yup
        .string()
        .email('Enter a Valid Email')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(4, 'Password needs to be at least 4 letters long'),
    terms: yup
        .string()
        .oneOf(["accept", "decline"], 'please accept or decline')
})

export default schema;