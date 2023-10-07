import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPay } from '../services/FormPayService'

const generateDefaultInvoiceNumber = () => {
    return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
  };
  
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

function FormPay() {
    const [invoiceNumber, setInvoiceNumber] = useState(generateDefaultInvoiceNumber);
    const [currentDate] = useState(getCurrentDate);
  
    const handleAddToCart = () => {
      const defaultInvoiceNumber = generateDefaultInvoiceNumber();
      setInvoiceNumber(defaultInvoiceNumber);
    };
  
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const defaultPrice = queryParams.get('precio') || '0.00';
  

  const [formData, setFormData] = useState({
    nro_factura: invoiceNumber,
    fecha_factura: currentDate,
    metodo_pago: "Transferencia",
    estado_pago: "Contado",
    direccion_envio: "",
    igv: defaultPrice * 0.18,
    subtotal:(defaultPrice / 1.18).toFixed(2),
    total: defaultPrice,
    notas: "",
    cardNumber: '',
    cardHolder: '',
    numberDni:'',
    expirationDate: '',
    cvc: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const postData = {
        nro_factura: invoiceNumber, 
      fecha_factura: currentDate, 
      metodo_pago: "Transferencia",
      estado_pago: "Contado",
      direccion_envio: formData.direccion_envio,
      igv: formData.igv,
      subtotal:formData.subtotal,
      total: defaultPrice,
      notas: "",
    };
  
    try {
      const response = await createPay(postData);
      console.log('Respuesta de la API:', response);
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    }
  };


  return (
   <section className="py-24">
      <div className="container px-2 mx-auto flex flex-col gap-8 items-center">
        <div className="mt-4">
        <h2 className="text-2xl text-teal-500 ">Formulario de Pago</h2>
        <form className="py-4" onSubmit={handleSubmit}>

            <div className="space-y-4 ">
               <div className="place-content-around grid grid-cols-2">
                   <label>Número de factura:</label>
                   {invoiceNumber &&<p> {invoiceNumber}</p>}
               </div>
               <div className="place-content-around grid grid-cols-2">
                   <label>Fecha de factura: </label>
                   <p>{currentDate}</p>
               </div>
               <div className="place-content-around grid grid-cols-2"> 
                    <label>Método de Pago:</label>
                    <input
                        className="flex text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="metodo_pago"
                        value={formData.metodo_pago}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="place-content-around grid grid-cols-2"> 
                    <label>Estado de Pago:</label>
                    <input
                        className="flex text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="estado_pago"
                        value={formData.estado_pago}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="place-content-around grid grid-cols-2"> 
                    <label>Direccion de Envio:</label>
                    <input
                        className="flex text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="direccion_envio"
                        value={formData.direccion_envio}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="place-content-around grid grid-cols-2"> 
                    <label>IGV</label>
                    <input
                        className="flex text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="igv"
                        value={formData.igv}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="place-content-around grid grid-cols-2"> 
                    <label>Subtotal:</label>
                    <input
                        className="flex text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="subtotal"
                        value={formData.subtotal}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="place-content-around grid grid-cols-2">
              <label>Precio Total:</label>
              <p>{defaultPrice} PEN</p>
            </div>
                <div>
                    <label className="font-sans" htmlFor="cardHolder">Titular de la Tarjeta:</label>
                    <input
                        className="flex text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        id="cardHolder"
                        name="cardHolder"
                        value={formData.cardHolder}
                        onChange={handleInputChange}
                        placeholder="Nombre del Titular"
                        required
                    />
                </div>  
                <div className="place-content-around grid grid-cols-2 space-x-1.5">
                    <label className="font-sans" htmlFor="numberDni">Número de DNI:</label>
                    <input
                        className="flex text-sm flex-col rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        id="numberDni"
                        name="numberDni"

                        value={formData.numberDni}
                        onChange={handleInputChange}
                        placeholder="xxxxxxxx"
                        required
                    />
                </div>                          
                <div className="place-content-around grid grid-cols-2 space-x-1.5">
                    <label className="font-sans" htmlFor="cardNumber">Número de Tarjeta:</label>
                    <input
                        className="flex text-sm flex-col rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                        required
                    />
                </div>

                <div className="place-content-around grid grid-cols-2 space-x-1.5">
                    <label className="font-sans" htmlFor="expirationDate">Fecha de Expiración:</label>
                    <input
                        className="flex text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        id="expirationDate"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                    />
                </div>
                <div className="place-content-around grid grid-cols-2  space-x-1.5">
                    <label className="font-sans" htmlFor="cvc">CVC:</label>
                    <input
                        className="flex text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        id="cvc"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleInputChange}
                        placeholder="123"
                        required
                    />
                </div>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Pagar
                    </span>{handleAddToCart}
                </button>
            </div>
                    
        </form>
       <Link to="/formOrder"> <button className="bg-sky-500 text-white p-2 hover:bg-sky-700 text-1xl rounded-md " type="submit">Atras</button></Link>
        </div>
      </div>
    </section>  
  );
}

export default FormPay;