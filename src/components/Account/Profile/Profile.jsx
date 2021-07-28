import React from 'react';
import './Profile.css';

import {isAuthenticate, signout} from '../../../Javascript/apiCore'
import { Link } from 'react-router-dom';

const Profile = ({history}, props) => {

    const adminPanel = ()=>{
        if (isAuthenticate().user.role === 1) {
            return (
                <Link to="/admin">Administración</Link>
            )
        }
    }





    return (
        <div>
            {adminPanel()}
            <button 
                onClick={()=>{
                    signout(()=>{
                        history.push('/')
                        window.location.href = "/"
                    })
                }
                }
            >Cerrar sesión</button>
        </div>
    );
};

export default Profile;