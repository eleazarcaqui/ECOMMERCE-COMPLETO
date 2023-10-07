
import { Link } from "react-router-dom";

const FormOrder = () => {

  return (
    <section className="py-24">
      <div className="container px-2 mx-auto flex flex-col gap-8 items-center">
         <form className="mt-8">
          <div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 white:text-dark">
             Cantidad de pedido
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"         
              required
            />
          </div>
         <div className="mb-6">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 white:text-dark"
            >
              Dirección de la compra
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Dirección"
              required
            />
          </div>
          <div className="mb-6">
            <label
              type=""
              className="block mb-2 text-sm font-medium text-gray-900 white:text-dark"
            >
              Dirección del pedido
            </label>
            <input
              type="text"
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Dirección"  
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900 white:text-dark"
            >
              Fecha del pedido
            </label>
            <input
              type="Date"
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="fecha"
              required
            />
          </div>
          <div className="mb-6">
            <label
              type=""
              className="block mb-2 text-sm font-medium text-gray-900 white:text-dark"
            >
              Indica el Método de entrega
            </label>
            <input
              type="text"
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 white:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Provincia-Delivery-Tienda"
              required
            />
          </div>
          
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Estoy de acuerdo con los{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                términos y condiciones .
              </a>
              .
            </label>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link to="/miCarrito"><button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 dark:hover:bg-red-700"
          >
            Cancel
          </button></Link>
          <Link to="/formPay"><button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Realizar pago
          </button></Link>
        </div>
        </div>
        </form>
       </div>
    </section>             
  );
};

export default FormOrder;
