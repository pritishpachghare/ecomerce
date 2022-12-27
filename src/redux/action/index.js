
export const addCart = (product) => {
    return{
        type: "ADDCART",
        payLoad: product
    }
}
export const deletCart = (product) => {
    return{
        type: "DELITEM",
        payLoad: product
    }
}