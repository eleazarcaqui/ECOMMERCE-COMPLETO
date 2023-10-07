import { useLoaderData, Link} from "react-router-dom";

const CategoryProduct = () => {
    const data = useLoaderData();

 const category = data.content.category;
 const products = data.content.products.content; 

 const categoriaId = category.content.id;
 const productosFiltrados = products.filter(
   (producto) => producto.categoria.id === categoriaId
 );

  return (
    <section className="py-24">
      <div className="container px-2 mx-auto flex flex-col gap-8">
          <h1 className="text-teal-500 py-4 font-extrabold text-3xl text-center transition-colors">
          <span className="uppercase text-lime-500">{category.content.nombre}</span></h1>
            <ul className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))]  gap-6 ">
                {productosFiltrados.map((producto) => (
              <>
              <li key={producto.id} className="rounded-2xl overflow-hidden flex flex-col">
              <Link
                to={`/producto/${producto.id}`}
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  width={256}
                  height={256}
                  className="w-full h-64 object-cover "
                />
              </Link>
                <div className="h-full p-4 bg-sky-900 flex flex-col gap-2 ">
                
                <h3 className="text-2xl font-bold text-center">{producto.nombre}</h3>
                <h4 className="text-sm text-gray-400">{producto.descripcion}</h4>
               <h5 className="text-lg font-bold text-white">Precio: {producto.precio } PEN</h5>
               <button   className="py-2 px-8 mt-auto rounded-2xl bg-sky-600 font-semibold transition-colors hover:bg-sky-500">Agregar al Carrito</button>             
                </div>
              </li>
              </>
            ))}
            </ul>
          
        </div>
    </section>    
  );
};

export default CategoryProduct;

