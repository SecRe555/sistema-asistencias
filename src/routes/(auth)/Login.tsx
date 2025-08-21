import {Box, Button, Link, Typography, useMediaQuery} from "@mui/material";
import {loginInitialValues, loginValidationSchema, type LoginValues} from "@/schemas/auth/loginValidationSchema.ts";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Form, Formik} from "formik";
import {FormikTextField} from "@/components/FormikTextField.tsx";

import imgLogin from '@/assets/imgs/img_login.webp'
import styles from '@/styles/auth/login.module.css'

export default function Login() {
  const nav = useNavigate();

  const onSubmit = (values: LoginValues): void => {
    //TODO: Meterle la logica para hacer consultas a API.
    console.log(values);
    nav('/');
  }

  const vistaResponsiva = useMediaQuery('(max-width: 775px)');

  return (
    <Box component="main" sx={{display: "flex", width: "100%", height: "100%"}}>
      <Box component="section" sx={{
        display: vistaResponsiva ? 'none' : 'block',
        maxHeight: '100%',
        flexGrow: 2,
        overflow: 'hidden'
      }}>
        <img src={imgLogin} alt="Imagen decorativa" style={{width: '100%', height: '100%', objectFit: "cover"}}/>
      </Box>
      <Box component="section"
           sx={{
             display: 'flex',
             flexGrow: 1,
             justifyContent: 'center',
             alignItems: 'center',
             minWidth: vistaResponsiva ? 'auto' : '425px'
           }}>
        <Formik initialValues={loginInitialValues} validationSchema={loginValidationSchema} onSubmit={onSubmit}>
          <Form className={styles.formLogin}>
            <Typography component='h1' variant='h5'>Inicio de sesión</Typography>
            <FormikTextField name={'email'} label={'Correo electronico'}/>
            <FormikTextField name={'password'} label={'Contraseña'} type={'password'}/>
            <Button variant={'contained'} type={'submit'}>Iniciar sesión</Button>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
              <Typography className={styles.formLinkContainer} textAlign={'center'}>¿No tienes una cuenta? <Link
                component={RouterLink}
                to={'/registro'}>Registrate</Link></Typography>
              <Typography className={styles.formLinkContainer} textAlign={'center'}>¿Olvidaste tu contraseña? <Link
                component={RouterLink}
                to={'/'}>Recuperala</Link> </Typography>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
}
