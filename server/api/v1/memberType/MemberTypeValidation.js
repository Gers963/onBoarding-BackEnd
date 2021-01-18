/* eslint-disable indent */
/* eslint-disable linebreak-style */
import * as yup from 'yup';

export default {
    create: yup.object().shape({
        description: yup
            .string()
            .required(),
        situation: yup
            .bool()
            .required(),
    }),
};
