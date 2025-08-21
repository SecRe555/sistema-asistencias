import React from "react";
import {TextField, type TextFieldProps} from '@mui/material';
import { useField } from 'formik';

type NameProp = {name: string};

export const FormikTextField: React.FC<TextFieldProps & NameProp> = ({ name, ...props }) => {
    const [field, meta] = useField(name);

    const isError = Boolean(meta.touched && meta.error);

    return (
        <TextField
            {...field}
            {...props}
            error={isError}
            helperText={isError ? meta.error : ''}
        />
    );
};