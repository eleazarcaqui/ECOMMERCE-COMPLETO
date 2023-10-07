export const createPay = async (data) => {
    const response = await fetch('http://127.0.0.1:5000/api/pago', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    });
  
    return response.json();
  };
  