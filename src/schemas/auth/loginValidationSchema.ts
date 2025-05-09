import * as Yup from 'yup';

export interface LoginValues {
  email: string;
  password: string;
}

export const loginInitialValues: LoginValues = {
  email: '',
  password: '',
}

export const loginValidationSchema = Yup.object({
  email: Yup.string().email('Introduzca un email valido').required('Campo requerido'),
  password: Yup.string().min(8, 'Debe ser de minimo 8 caracteres').required('Campo requerido'),
});