'use client';

import { AssertionError } from "assert";



interface CARRTSTORAGE {
    items: string[]
}

export interface CART_DATA {
    product_id: string; //
    count: number; //How many times the id has been selected
}


class CartStorage {


    items: CART_DATA[] = [];
    value: string | null = null;
    isValidated: boolean = false;
    storageName: string = 'belaieExpressStore';
    products: string[] = []

    constructor() {
        this.validate();
        
        
    }
    validate() {
        if (typeof window !== "undefined") {
            this.parseData();
            this.isValidated = true;
        } else {
            this.isValidated = false;
        }
    }
    private parseData() {
        
        this.value = localStorage.getItem("belaieExpressStore") || null;
        
        if(this.value !== null) {
            console.log('data found')
            this.isValidated = true;
            this.items = JSON.parse(this.value);
            this.items.forEach(product => {
                this.products.push(product.product_id);
            });
            
            return true;
            
        }
        
        let scaffold_data:CART_DATA[]  = [] 
        localStorage["belaieExpressStore"] = JSON.stringify(scaffold_data)
        this.items = JSON.parse(localStorage['belaieExpressStore']);
        
        this.items.forEach(product => {
            this.products.push(product.product_id);
        });
        return true;
   
        

    }

    public add(id: string) {
        this.isValidated?
        (()=> {
            console.log('validation completed')
            console.log(JSON.parse(localStorage["belaieExpressStore"]))
            //let product: CART_DATA;
            if(this.products.includes(id)) {
                let index:number = this.products.indexOf(id);
                
            } else {
                this.items.push({'product_id':id,count:1});
                this.save()
            }
            console.log(this.items)

        })()
        :
        console.log('validaion incomplete')
        ;
        
    }
    public retrieve() {
        return this.items;
    }
    private save() {
        localStorage.setItem(this.storageName,JSON.stringify(this.items))
    }
}

export default CartStorage