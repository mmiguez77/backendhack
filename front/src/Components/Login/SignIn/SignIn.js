import React from 'react'
import {Formik, Form } from 'formik';
import CampoDeTexto from './CampoDeTexto';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import "./../../../App.css"


const Signin = () => {
    // const validate = Yup.object({
    //     email: Yup.string()
    //     .required("Ingresar Correo Eletronico"),
    //     password: Yup.string()
    //     .required("Ingresar contraseña"),
        
    // })
    
    return (
        <Formik
            initialValues={{
                email:'',
                password:''
            }}
            validationSchema={Yup.object({
                password: Yup.string().required("requerido"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Requerido"),  
            })}
            
        > 
            {formik => (
                <div>
                    <h1 className="my-4-font-weight-bold-display-4">Ingresar</h1>
                    {console.log(formik.values)}
                    <Form>
                        <CampoDeTexto label="Email" name="email" type="email"  />
                        <CampoDeTexto label="Password" name="password" type="password" />
                        <Link to={`/user/login`}><button className="btn-crearCuenta " type="submit">Enviar</button></Link>
                        <Link to={`/Select`}><button className="btn-Registrate">Registrate</button></Link>
                        
                        
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Signin
 