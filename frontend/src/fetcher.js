const BASE_URL = "http://localhost:3001"

export const fetcher = async (url) =>{
    const res = await fetch(BASE_URL + url)
    const resData = await res.json()
    return resData
}