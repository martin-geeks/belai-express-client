import axios from "axios";

const API_KEY: string = ''; 
const BASE_URL:string = 'http://localhost:5000';
const REMOTE_url: string = 'https://api.unsplash.com/photos';
const BASE_SHOP: string = 'https://shopeeapi2.p.rapidapi.com/en';

const API = axios.create({
    baseURL:BASE_URL,
    params: {API_KEY:API_KEY}

});

const API2 = axios.create({
    method:'GET',
    baseURL:BASE_SHOP,
    headers: {
        'X-RapidAPI-Key': '97d10787c5mshba16100afabc9bap1d0da4jsn95a45e3b1cda',
        'X-RapidAPI-Host': 'shopeeapi2.p.rapidapi.com'
    }
})
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
    try {
    let resp = await axios.get(REMOTE_url,{
        params:{
            client_id:'sQ1dTSupVAeRKiLEWzmzjWgKOuU5q3rFt086AsT47-g',
            query:'dress',

        }
    })
    if(resp.data) {
        return resp.data;
    } else {
        //console.log(resp)
    }
} catch(error: any) {
    return {status:false}
}
}



export const products = async  <T>(data:T)  => {

        

        try {
            const response = await API2.get('/search',{params: {q: 'me', p: '1'}})
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
}

