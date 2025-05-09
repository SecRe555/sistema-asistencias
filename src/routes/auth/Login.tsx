import {Box, Button, Container, Link, Paper, Typography} from "@mui/material";
import {loginInitialValues, loginValidationSchema, type LoginValues} from "@/schemas/auth/loginValidationSchema.ts";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {FormikTextField} from "@/components/TextFieldFormik.tsx";
import {Form, Formik} from "formik";

import styles from '@/styles/auth/login.module.css'

export default function Login() {
  const nav = useNavigate();

  const onSubmit = (values: LoginValues): void => {
    console.log(values);
    nav('/');
  }

  return (
    <Container maxWidth={'lg'} sx={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Paper elevation={12} sx={{
        width: '85%',
        maxWidth: '500px',
        height: '70%',
        maxHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 5,
        borderRadius: 5,
      }}>
        <Formik initialValues={loginInitialValues} validationSchema={loginValidationSchema} onSubmit={onSubmit}>
          <Form className={styles.formLogin}>
            <Typography component='h1' variant='h5'>Inicio de sesión</Typography>
            <FormikTextField name={'email'} label={'Correo electronico'}/>
            <FormikTextField name={'password'} label={'Contraseña'} type={'password'}/>
            <Button variant={'contained'} type={'submit'}>Iniciar sesión</Button>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
              <Typography textAlign={'center'}>¿No tienes una cuenta? <Link component={RouterLink}
                                                                            to={'/'}>Registrate</Link></Typography>
              <Typography textAlign={'center'}>¿Olvidaste tu contraseña? <Link component={RouterLink}
                                                                               to={'/'}>Recuperala</Link> </Typography>
            </Box>
          </Form>
        </Formik>
      </Paper>
    </Container>
  );
}
