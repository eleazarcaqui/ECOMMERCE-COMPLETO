import { Link, useLoaderData } from "react-router-dom";

const CategoryPage = () => {
  const data = useLoaderData();
  
  return (
     <section className="py-24">
     <div className="container px-2 mx-auto flex flex-col gap-1">
    <div>
      <h1 className="text-teal-500 py-4 font-extrabold text-3xl text-center transition-colors hover:text-amber-500">Categorías</h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))]  gap-6">
      {data.content !== undefined &&
        data.content.map((element) => {
          const { id, nombre, marca, descripcion } = element;
          return (
            <div
              key={id}
              className="rounded-2xl overflow-hidden flex flex-col"
            >
              <Link
                to={`/categoria/${id}`}
              >
                <img
                  src={"https://d2j6dbq0eux0bg.cloudfront.net/images/37754822/3759960037.jpg"}
                  alt={nombre}
                  width={256}
                  height={256}
                  className="w-full h-64 object-cover"
                />
              </Link>
              <div className="h-full p-4 bg-sky-900 flex flex-col gap-2">
                <Link
                  to={id}
                >
                  <h3 className="text-2xl font-bold text-center">{nombre}</h3>
                </Link>

                <Link to={location.url} className="text-sm text-gray-400"><span className="font-bold">Marca:</span> {marca}</Link>
                <h5 className="text-sm text-gray-400"><span className="font-bold">Descripcion:</span> {descripcion}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
      </div>
    </section>
  );
}

export default CategoryPage;
