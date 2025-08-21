import * as Yup from 'yup';

export interface RegistroValues {
  nombres: string;
  apellido_paterno: string;
  apellido_materno: string;
  correo_electronico: string;
  profesion: 'abogada' | 'psicologa' | 'trabajadora_social' | '';
  contrasena: string;
  confirmar_contrasena: string;
}

export const registroInitialValues: RegistroValues = {
  nombres: '',
  apellido_paterno: '',
  apellido_materno: '',
  correo_electronico: '',
  profesion: '',
  contrasena: '',
  confirmar_contrasena: ''
}

export const registroValidationSchema = Yup.object().shape({
  nombres: Yup.string().required('Campo requerido'),
  apellido_paterno: Yup.string().required('Campo requerido'),
  apellido_materno: Yup.string().required('Campo requerido'),
  correo_electronico: Yup.string().email('Introduzca un email valido').required('Campo requerido'),
  profesion: Yup.string().required('Campo requerido'),
  contrasena: Yup.string().required('Campo requerido'),
  confirmar_contrasena: Yup.string().required('Campo requerido'),
})
