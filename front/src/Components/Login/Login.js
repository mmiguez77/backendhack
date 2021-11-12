import React from 'react'
import make from '../../assets/make.svg';
import Signin from './SignIn/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';




const Login = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <Signin />
                </div>
                <div className="col-md-7">
                    <img className="img-fluid w-100" src={make} alt="registro imagen"/>
                </div>
            </div>
        </div>
    )
}

export default Login
