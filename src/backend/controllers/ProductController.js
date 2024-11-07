export const getAllProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        console.log("hello",json);  
        return json;        
    } catch (error) {
        console.error("Error fetching products:", error); 
    }
};


export const getSingleProduct = async (productID)=>{
    try{
        console.log('id',productID)
        const response = await fetch(`https://fakestoreapi.com/products/${productID}`);
        const json = await response.json();
        console.log("hello",json); 
        return json;      
        
    

    }catch(error){
        console.error("Error fetching products:", error)
    }
}