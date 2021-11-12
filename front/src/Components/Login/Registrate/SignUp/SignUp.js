import { Formik, Form } from 'formik'
import React from 'react'
import TextField from './TextField'
import {Link} from 'react-router-dom';
import "../../../../App.css"

const SignUp = () => {
    return (
        <Formik
            initialValues={{
                nombre: "",
                apellido:"",
                email:"",
                password:"",
                // confirmPassword: ""
            }}
        
        
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold .display-4">Registrate</h1>
                    {(console.log(formik.values))}
                    <Form>
                        <TextField label="nombre" name="username" type="text" required />
                        <TextField label="apellido" name="surname" type="text" required />
                        <TextField label="email" name="email" type="email" required />
                        <TextField label="password" name="password" type="password" required />
                        <input className="inputs" type="text" value="emprendedor" id="rol" name="rol" required autocomplete="off" />
 
                        <Link to={`/user/register`}><button className="btn-Registrate" type="submit">Confirmar</button></Link>
                        <Link to={`/Login`}><button className="btn-crearCuenta">Volver</button></Link>
                        
                    </Form>
                </div>
            )
                
            }

        </Formik>
    )
}

export default SignUp
