import React from 'react';
import { useState } from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import GoogleLogin from 'react-google-login'
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import './Login.css'

const Login = () => {

    const [loginState, setLoginState] = useState(true);
    


    const responseGoogle = (res)=>{
        console.log(res.profileObj)
    }

    const responseFacebook = (res) => {
        console.log(res);
    }


    return (
        <div className="login-container">
            <div className="login-container_title">
                <h4>{loginState ? "Iniciar Sesion": "Registrarse"}</h4>
            </div>
            <div className="login-container_session">
                {
                    loginState ?
                    (
                        <>
                            <SignIn setLoginState={()=> setLoginState(false)}/>
                        </>

                    )
                    :
                    (
                        <>
                            <SignUp setLoginState={()=> setLoginState(true)}/>
                        </>
                    )
                }
                <span className="login-divisor">O</span>
                <div className="login-container_session-socialMedia">
                    <GoogleLogin
                        clientId="152431113647-c81kf34ad71ghaah0vtolg85rfhkdoii.apps.googleusercontent.com"
                        render={renderProps=>(
                            <button className="btn-google" onClick={renderProps.onClick} disable={renderProps.disable}><i className="fab fa-google"></i><p>Continuar con Google</p></button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <FacebookLogin
                        appId="891007291764860"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        render={renderProps => (
                            <button className="btn-facebook" onClick={renderProps.onClick}><i className="fab fa-facebook-f"></i><p>Continuar con Facebook</p></button>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;