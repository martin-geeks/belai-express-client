import axios from "axios";

const API_KEY: string = ''; 
const BASE_URL:string = 'http://localhost:5000';
const REMOTE_url: string = 'https://api.unsplash.com/photos';

const API = axios.create({
    baseURL:BASE_URL,
    params: {API_KEY:API_KEY}

});

export const getProducts = async () => {
    try {
        const request = await API.get('/api/v1/products');
       if(request.data && request.status === 200) {
            return request;
       } else {
            return {status:false,message: 'Error occured'}
       }
        
    } catch(error: any) {
        
        return {status:false,message:'Error while fetching'}
    }
    
   
    
}

export const getClothes = async () => {
    let resp = await axios.get(REMOTE_url,{
        params:{
            client_id:'sQ1dTSupVAeRKiLEWzmzjWgKOuU5q3rFt086AsT47-g',
            query:'car',

        }
    })
    if(resp.data) {
        return resp.data;
    } else {
        //console.log(resp)
    }
}

