import * as Yup from "yup";

export const title = Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Title is required');

export const description =  Yup.string()
    .min(10, 'Too Short!')
    .max(150, 'Too Long!')
    .required('Description is required');

export const state = Yup.mixed()
    .oneOf(['in_progress', 'completed'], 'Invalid state')
    .required('State is required');

const validationSchema = Yup.object({title, description, state})

export default validationSchema;