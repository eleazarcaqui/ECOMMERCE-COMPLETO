import { Link, NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png'

const Header = () => {

  const links = [
    {
      href: '/categorias',
      content: 'Categorias'
    },
    {
      href: '/productos',
      content: 'Productos'
    },
    {
      href: '/ofertas',
      content: 'Ofertas'
      
    }
  ];

  return (
    <header className="fixed z-50 top-0 left-0 w-full bg-black/50 shadow-sm shadow-gray-50">
      <nav className="py-4">
        <div className="container px-2 mx-auto flex items-center justify-between text-white">
          <Link to="/">
            <img className="w-16 h-16 object-cover" width="80" height="80" src={logo} ></img>
          </Link>
          <ul className="flex gap-4">
            {links.map((element, index) => {
              return (
                <li key={index}>
                  <NavLink to={element.href} className={({ isActive }) => `font-semibold transition-colors hover:text-teal-500 ${isActive ? 'text-teal-500' : ''}`}>{element.content}</NavLink>
                </li>
                
              );
            })}
          </ul>
            <div className="flex gap-4 justify-center items-center">
                <div className="hover:opacity-50 flex flex-col items-center">
                  <Link to="/formLogin"><img width="32" height="32" src="https://www.infotec.com.pe/img/cms/IconosNew/IconosPrincipales/INICIAR SESION.png" alt=""/></Link>
                  <div className="">
                    <h3 className=""><Link to="/formLogin">Iniciar Sesión</Link></h3>
                  </div>
                </div>
                <div className="hover:opacity-50 flex flex-col items-center">
                  <Link to="/miCarrito"><img  width="32" height="32" src="https://www.infotec.com.pe/img/cms/IconosNew/IconosPrincipales/CARRITO.png" alt="" /></Link>
                  <div className="">
                    <h3 className=""><Link to="/miCarrito">Mi Carrito</Link></h3>
                  </div>
                </div>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;