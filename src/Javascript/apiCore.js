import {API} from '../config';


export const getProducts = () =>{
    return fetch(
        `${API}/products/products`,
        {
            method: 'GET'
        }
    )
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getProductById = (id) =>{
    return fetch(`${API}/products/${id}`, {
        method: "GET"
    }).then(response=>{
        return (response.json());
    })
    .catch(err=>console.log(err))
}

export const getCategories = ()=>{
    return fetch(`${API}/category/categories`,
    {
        method: "GET"
    })
    .then(response =>{
        return response.json()
    })
    .catch(err =>{
        console.log(err)
    })
}

export const getCategoryById = (id) =>{
    return fetch(`${API}/category/${id}`, {
        method: "GET"
    }).then(response=>{
        return (response.json());
    })
    .catch(err=>console.log(err))
}

export const signup = (user) =>{
    return fetch(`${API}/auth/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err =>{
        console.log(err)
    })
}

export const signin = (user) =>{
    return fetch(`${API}/auth/signin`, {
        method: "POST",
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err =>{
        console.log(err)
    })
}

export const signout = (next) =>{
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        next();
        return fetch(`${API}/auth/signout`,{
            method: 'GET'
        })
        .then( response =>{
            return response.json()
        })
        .catch(err => console.log(err))
    }
}

export const authenticate = (data, next)=>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
}

export const isAuthenticate = ()=>{
    if (typeof window == "undefined"){
        return false;
    }

    if(localStorage.getItem('jwt')){
        // console.log(JSON.parse(localStorage.getItem('jwt')))
        return JSON.parse(localStorage.getItem('jwt'));
    }

    return false;
}