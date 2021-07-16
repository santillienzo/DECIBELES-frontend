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