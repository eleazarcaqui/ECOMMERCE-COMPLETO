export const readCategories= async () => {
    const response = await fetch('http://127.0.0.1:5000/api/categoria');
    return response.json();
  };
  
  export const readCategorie = async ({ params }) => {
    
    const categoryResponse = await fetch(`http://127.0.0.1:5000/api/categoria/${params.id}`);
    const categoryData = await categoryResponse.json();
  
    const productsResponse = await fetch(`http://127.0.0.1:5000/api/producto`);
    const productsData = await productsResponse.json();
  
    return {
      content: {
        category: categoryData,
        products: productsData
      }
    };
  };
  
 
  
  
  