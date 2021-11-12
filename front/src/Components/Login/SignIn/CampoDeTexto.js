import React from 'react'
import { ErrorMessage, useField } from 'formik'

const CampoDeTexto = ({ label,...props }) => {

const [field, meta] = useField(props)
    

    return (
        <div className="mb-2">  
            <label htmlFor={field.email}>{label}</label>
            <input className={`form-control shadow-none ${meta.touched && meta.error && "Es invalido"}`}
            {...field} {...props} autoComplete="off"/>
            
            
        </div>
    )
}

export default CampoDeTexto
