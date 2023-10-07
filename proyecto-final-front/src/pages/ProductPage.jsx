import { Link, useLoaderData } from "react-router-dom";

const ProductPage = () => {
  const data = useLoaderData();
  const { id, nombre, imagen, descripcion, precio, stock, fecha_registro, categoria} = data.content;
   const { nombre: categoriaNombre, marca: categoriaMarca, descripcion: categoriaDescripcion} = categoria;
  return (
    <section className="py-24">
      <div className="container px-2 mx-auto flex flex-col gap-8">
        <div key={id}>
          <h1 className="text-teal-500 py-4 font-extrabold text-3xl text-center transition-colors">
            {nombre}</h1>
        </div>
        <div className="max-w-5xl p-4 mx-auto rounded-2xl bg-sky-900 shadow-2xl shadow-teal-500 grid md:grid-cols-2 gap-6 items-center">
          <img
            src={imagen}
            alt={nombre}
            width={256}
            height={256}
            className="w-full h-96 object-cover rounded-2xl "
          />
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-base text-rose-500 text-2xl">Modelo: <span className="text-white font-normal">{nombre}</span></h2>
            <h4 className="font-bold text-rose-500 text-base">Marca:<span className="text-white font-normal"> {categoriaMarca}</span> </h4>
            <h4 className="font-bold text-rose-500">Categoría:<span className="text-white font-normal"> {categoriaNombre}</span></h4>
            <div className="text-base font-bold text-rose-500">Descripcion:
            <p className="text-white font-normal">{categoriaDescripcion}</p>
              <span className="text-white font-normal">{descripcion}</span>
            </div>
            <h3 className="text-base font-bold text-rose-500">Fecha puesta a la venta:<span className="text-white font-normal"> {fecha_registro}</span></h3>
            <h3 className="text-base font-bold text-rose-500">Precio: <span className="text-white font-normal"> {precio} PEN</span></h3>
            <h4 className="text-base font-bold text-rose-500">Stock: <span className="text-white font-normal"> {stock}</span></h4>
            <Link
              className="py-2 px-8 gap-8 mt-auto rounded-2xl bg-teal-500 font-semibold self-start transition-colors hover:bg-amber-200 hover:text-sky-950"
            >Agregar al carrito
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
