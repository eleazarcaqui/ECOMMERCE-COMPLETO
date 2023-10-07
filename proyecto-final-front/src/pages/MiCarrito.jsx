import { useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useCart } from '../layouts/CartContext';

const MiCarrito = () => {
  const { state, dispatch} = useCart();
  const navigate  = useNavigate();

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const handleBuyNow = (item) => {
    addToCart(item);
    navigate(`/formPay?precio=${item.precio}`);
  };

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item }); 
  };
  useEffect(() => {
    localStorage.removeItem('state');
  }, []);


  return (
    <section className="py-24">
     <div className="container px-2 mx-auto flex flex-col gap-8">
        <div>
            <h1 className="text-teal-500 py-4 font-extrabold text-3xl text-center transition-colors">MI CARRITO DE COMPRA</h1>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))]  gap-6 ">
               <ul>
                  {state.cartItems.map((item) => ( 
                  <li key={item.id}>
                    <div className="flex flex-col mx-auto max-w-md  bg-slate-300  rounded-xl shadow-md overflow-hidden mt-4">
                        <div className="md:flex">
                          <div className="md:shrink-0">
                            <img className="h-48 w-full object-cover md:h-full md:w-48" src={item.imagen} alt={item.nombre} />
                          </div>
                          <div className="p-8">
                            <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.nombre}</h3>
                            <p className=" text-slate-500">{item.descripcion}</p>
                            <h4 className="block mt-1 text-lg leading-tight font-medium text-black">Precio: {item.precio} PEN</h4>
                            <Link>
                              <button
                                className="py-1 px-4 mt-2 rounded-2xl font-semibold transition-colors bg-sky-500 hover:bg-sky-700 text-white"
                                onClick={() => handleBuyNow(item)}
                              >
                                Comprar Producto
                              </button>
                            </Link>
                            <button onClick={() => removeFromCart(item)} className="py-1 px-4 mt-2 rounded-2xl font-semibold transition-colors bg-red-500 hover:bg-red-700 text-white">Eliminar de Carrito</button>                                    
                          </div>       
                        </div>
                      </div>
                    </li>
                    ))}
                </ul>
            </div>
         </div>         
      </div> 
    </section>
  );
};

export default MiCarrito;
