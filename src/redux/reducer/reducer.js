const cartReducer = (state = [] , action)=>{
    
    const product = action.payload
    let updatedCart

    switch(action.type){
        case "ADD" : 
            const exist = state.find((item)=>{
                return item.id === product.id
            })
            if(exist){
                updatedCart = state.map((item)=>
                    item.id === product.id ? {...item , count : item.count + 1} : item
                )
            }else{
                updatedCart = [...state , {...product , count:1}]
            }
            localStorage.setItem('cart' , JSON.stringify(updatedCart))
            return updatedCart

        case "DEL" : 
            const exist2 = state.find((item)=>{
                return item.id === product.id
            })
            if(exist2 && exist2.count == 1){
                updatedCart = state.filter((item)=>{
                    return item.id !== exist2.id
                })
            }else{
                updatedCart = state.map((item)=>
                    item.id === product.id ? {...item , count : item.count - 1} : item
                )
            }
            localStorage.setItem('cart' , JSON.stringify(updatedCart))
            return updatedCart   
            
        case "REM" : 
            const exist3 = state.find((item)=>{
                return item.id === product.id
            })
            if(exist3){
                updatedCart = state.filter((item)=>{
                    return item.id !== exist3.id
                })
            }else{
                updatedCart = state
            }
            localStorage.setItem('cart' , JSON.stringify(updatedCart))
            return updatedCart
        
        case "CLC" :
            updatedCart = []
            localStorage.setItem('cart' , JSON.stringify(updatedCart))
            return updatedCart

        default :
            return state
    }
}

export default cartReducer