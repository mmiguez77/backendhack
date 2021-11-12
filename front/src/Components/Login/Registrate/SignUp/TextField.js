import { Field, useField } from 'formik'
import React from 'react'

const TextField = ({label,...props}) => {

const [field, meta] = useField(props)
console.log(meta)

    return (
        <div className="mb-2">
            <label htmlFor={Field.name}>{label}</label>
            <input className="form-control shadow-none" 
            {...field}{...props} autoComplete="off" />
            
            
        </div>
    )
}

export default TextField
