export const readProducts= async () => {
    const response = await fetch('http://127.0.0.1:5000/api/producto');
    return response.json();
  };

export const readProduct = async ({ params }) => {
  const response = await fetch(`http://127.0.0.1:5000/api/producto/${params.id}`);
  return response.json();
};