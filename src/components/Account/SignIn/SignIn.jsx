import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { authenticate, isAuthenticate, signin } from '../../../Javascript/apiCore';
import './SignIn.css'

const SignIn = (props) => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false,
    });

    const {email, password, loading, error, redirectToReferrer} = values;
    const {user} = isAuthenticate();

    const handleChange = name => event =>{
        setValues({...values, error: false, [name]: event.target.value});
    }

    const clickSubmit = (event) =>{
        event.preventDefault();
        setValues({...values, error: false, loading: true});
        signin({email, password}).then(data=>{
            if (data.error) {
                setValues({...values, error: data.error, loading: false});
            } else{
                authenticate(data, ()=>{
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    })
                })
            }
        })
    }

    const redirectUser =()=>{
        if (redirectToReferrer) {
            if(user && user.role === 1){
                window.location.href = "/"
            }else{
                window.location.href = "/"
            }
        }
    }

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '': 'none'}}>
            {error}
        </div>
    )

    const showLoading = () => (
        loading && (
            <div className="alert alert-info">
            <h2>Loading...</h2>
            </div>
        )
    )



    return (
        <form className="login-container_session-form" onSubmit={clickSubmit}>
            {showError()}
            {showLoading()}
            {redirectUser()}
            <div className="SignIn-container">
                <input type="email" placeholder="Ingrese su email" onChange={handleChange('email')}/>
                <input type="password" placeholder="Ingrese su contraseña" onChange={handleChange('password')}/>
            </div>
            <button>Iniciar sesión</button>
            <p onClick={()=>props.setLoginState()}>Registrate</p>
        </form>
    );
};

export default SignIn;