const BASE_URL = "http://localhost:3001"

const fetcher = async (url) =>{

    let responseObject = {errorMessage: '', data: []}
    try{
        const res = await fetch(BASE_URL + url)
        if(!res.ok){
           throw new Error(`HTTP Error ${res.status}`)
        }
        const resData = await res.json()
        responseObject.errorMessage = ''
        responseObject.data = resData
        return responseObject

        }
    catch(err){
        responseObject.errorMessage = err.message
        return responseObject
    }
    
}
export const getCategories = () =>{
    return fetcher("/categories")
}
export const getProducts = id =>{
    return fetcher("/products?catId="+id)
}