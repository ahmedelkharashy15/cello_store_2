const addToCart = (product)=>{
    return{
        type : "ADD",
        payload : product
    }
}

const delFromCart = (product)=>{
    return{
        type : "DEL",
        payload : product
    }
}

const removeProduct = (product)=>{
    return{
        type : "REM",
        payload : product
    }
}

const clearCart = ()=>{
    return{
        type : "CLC",
    }
}

export {addToCart , delFromCart , removeProduct , clearCart }