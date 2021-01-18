/* eslint-disable indent */
/* eslint-disable linebreak-style */
import * as yup from 'yup';

export default {
    create: yup.object().shape({
        name: yup
            .string()
            .required(),
        phone: yup
            .string(),
        email: yup
            .string()
            .email()
            .required(),
        memberTypeId: yup
            .number()
            .positive(),
        address: yup
            .string(),
        situation: yup
            .bool()
            .required(),
    }),
};
