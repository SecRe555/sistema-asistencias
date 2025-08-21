import {Box, Button, Grid, Typography, useMediaQuery} from "@mui/material";
import {FormikTextField} from "@/components/FormikTextField.tsx";
import {Form, Formik} from "formik";
import {
  registroInitialValues,
  registroValidationSchema,
  type RegistroValues
} from "@/schemas/auth/registroValidationSchema.ts";

import styles from '@/styles/auth/registro.module.css'
import {useNavigate} from "react-router-dom";

export default function Registro() {
  const nav = useNavigate();

  const onSubmit = async (values: RegistroValues) => {
    console.log(values);
    nav('/login');
  }

  const esXs = useMediaQuery('(max-width: 900px)');

  return (
    <Box component={'main'} sx={{
      width: '100%',
      height: esXs ? 'fit-content' : '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: esXs ? '20px' : '0px',
      boxSizing: 'border-box',
    }}>
      <Box component={'section'}
           sx={esXs ? null : {
             width: '50%',
             minWidth: '320px',
             maxWidth: '900px',
             height: '70%',
             minHeight: 'fit-content',
             maxHeight: '700px',
             border: '1px solid rgba(0, 0, 0, 0.2)',
             borderRadius: '25px',
             boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.2)',
           }}>
        <Formik initialValues={registroInitialValues} validationSchema={registroValidationSchema}
                onSubmit={onSubmit}>
          <Form className={styles.form_registro}>
            <Typography variant={'h3'} sx={{marginBottom: '25px', fontSize: esXs ? '24px' : '32px'}}>Registro de
              empleado</Typography>
            <Grid container rowSpacing={4} columnSpacing={2} sx={{
              width: '100%',
              '& > .MuiGrid-root': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}>
              <Grid size={{xs: 12, md: 6}}>
                <FormikTextField name='clave' label='Clave de trabajo:'/>
              </Grid>
              <Grid size={{xs: 12, md: 6}}>
                <FormikTextField name='nombres' label='Nombre(s):'/>
              </Grid>
              <Grid size={{xs: 12, md: 6}}>
                <FormikTextField name='apellido_paterno' label='Apellido paterno:'/>
              </Grid>
              <Grid size={{xs: 12, md: 6}}>
                <FormikTextField name='apellido_materno' label='Apellido materno:'/>
              </Grid>
              <Grid size={{xs: 12, md: 6}}>
                <FormikTextField name='correo_electronico' label='Correo electronico:'/>
              </Grid>
              <Grid size={{xs: 12, md: 6}}>
                <FormikTextField name='profesion' label='Profesion:'/>
              </Grid>
              <Grid size={{xs: 12, md: 6}}>
                <FormikTextField name='contrasena' label='Contraseña:'/>
              </Grid>
              <Grid size={{xs: 12, md: 6}}>
                <FormikTextField name='confirmar_contrasena' label='Confirmar contraseña:'/>
              </Grid>
            </Grid>
            <Button variant={'contained'}>Registrarse</Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  )
}