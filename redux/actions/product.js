import axios from 'axios'


export function ALL_PRODUCTS(){
    return {
        type: "ALL_PRODUCTS",
        payload: axios.get('http://192.168.43.122:3333/products')
    }
}

export function ADD_ORDER(price,product_id){
    return{
        payload:axios.post('http://192.168.43.122:3333/order',{
            product_id,
            price
          })
    }
}

export function ALL_ORDER(){
    return {
        type: "ALL_ORDER",
        payload: axios.get('http://192.168.43.122:3333/orders')
    }
}

export function DELETE_ORDER(id){
    payload:axios.delete(`http://192.168.43.122:3333/order/${id}`)
}



