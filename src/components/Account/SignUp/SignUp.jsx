import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authenticate, signup } from '../../../Javascript/apiCore';
import './SignUp.css'

const SignUp = (props) => {

    //SIGNUP
    const [values, setValues] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        error: "",
        success: false,
    });
    
    const {name, lastname, email, password, error, success} = values;

    const handleChange = name => event=>{
        setValues({...values, error:false, [name]: event.target.value})
    }

    const clickSubmit = (event) =>{
        event.preventDefault();
        setValues({...values, error:false});
        signup({email, name, lastname, password}).then(data =>{
            if (data.error) {
                setValues({...values, error:data.error, success:false})
            }else{
                authenticate(data, ()=>{
                    setValues({
                        ...values,
                        name: "",
                        lastname: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true,
                    })
                })
                window.location.href = "/"
            }
        })
    }

    const showError = () => (
    <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
        {error}
    </div>
    )
    
    const showSuccess = () => (
        <div className='alert alert-info' style={{display: success ? '':'none'}}>  New Account Successfully Created You can now
            <Link to='/signin'>Sign in</Link>
        </div>
    )
    //SIGNUP


    return (
        <form className="login-container_session-form" onSubmit={clickSubmit}>
        {showError()}
        {showSuccess()}
            <div className="SignUp-container">
                <input type="email" placeholder="Ingresa un email" onChange={handleChange('email')} value={email}/>
                <div className="SignUp-container_name">
                    <input type="text" placeholder="Nombre" onChange={handleChange('name')} value={name}/>
                    <input type="text" placeholder="Apellido" onChange={handleChange('lastname')} value={lastname}/>
                </div>
                <input type="password" placeholder="Ingrese una contraseña" onChange={handleChange('password')} value={password}/>
                <input type="password" placeholder="Ingrese nuevamente su contraseña"  value={password}/>
            </div>
            <button>Registrarse</button>
            <p onClick={()=>props.setLoginState()}>Iniciar sesión</p>
        </form>
    );
};

export default SignUp;