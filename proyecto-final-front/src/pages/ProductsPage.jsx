import { Link, useLoaderData } from "react-router-dom";
import swal from 'sweetalert';
import { useCart } from '../layouts/CartContext';

const ProductsPage = () => {
  
  const { dispatch } = useCart();
  const addToCart = (product) => {
    swal({
      title: "Excelente",
      text: "Se agregó correctamente al carrito",
      icon: "success",
      button: "Aceptar",
      timer: "2000"
    });
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const data = useLoaderData();
  console.log(data)
  return (
     <section className="py-24">
     <div className="container px-2 mx-auto flex flex-col gap-8">
      <h1 className="text-teal-500 py-4 font-extrabold text-3xl text-center transition-colors hover:text-amber-500">Productos</h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))]  gap-6 ">
        {data.content !== undefined && data.content.map((element) => {
          const { id, nombre, precio, descripcion, imagen } = element;
          return (
            <div
              key={id}
              className="rounded-2xl overflow-hidden flex flex-col"
            >
              <Link
                to={`/producto/${id}`}
              >
                <img
                  src={imagen}
                  alt={nombre}
                  width={256}
                  height={256}
                  className="w-full h-64 object-cover "
                />
              </Link>
              <div className="h-full p-4 bg-sky-900 flex flex-col gap-2 ">
                <Link
                  to={id}
                >
                </Link>
                <h3 className="text-2xl font-bold text-center">{nombre}</h3>
                <h4 className="text-sm text-gray-400">{descripcion}</h4>
              <h5 className="text-lg font-bold text-white">Precio: {precio } PEN</h5>
              <button  onClick={() => addToCart(element)} className="py-2 px-8 mt-auto rounded-2xl bg-sky-600 font-semibold transition-colors hover:bg-sky-500">Agregar al Carrito</button>             
            </div>
            </div>
          );
        })}
      </div>
     </div>
   </section>
  );
}

export default ProductsPage;
