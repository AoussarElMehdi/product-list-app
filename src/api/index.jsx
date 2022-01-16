const API_URL = 'https://fakestoreapi.com/products'

const fetchData = async (url) =>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
export const fetchProducts = (param = "all" ) => {
    if(param === "all") return fetchData(API_URL);
    return fetchData(`${API_URL}/category/${param}`);
}