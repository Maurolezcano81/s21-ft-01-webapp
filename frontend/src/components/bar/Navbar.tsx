import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Capyblanco from "../svgs/capyblanco.svg";  

const Navbar: React.FC = () => { 
    const location = useLocation();
    
    //Enlaces y rutas
    const links = [  
        { name: "Dashboard", path: "/dashboard" },  
        { name: "Historial", path: "/historial" },  
        { name: "Billetera", path: "/billetera" },  
        { name: "Cuenta", path: "/cuenta" },  
        { name: "Ajustes", path: "/ajustes" },  
    ];  

    return (  
        <nav className="fixed left-0 top-0 h-full bg-coral-400 text-white p-4 flex flex-col z-50">    
            <div className="flex items-center mb-8">  
            
            </div>  
            <ul className="flex flex-col space-y-4">  
                {links.map(link => (  
                    <li key={link.path}>  
                        <Link  
                            to={link.path}  
                            className={`block py-2 px-4 rounded transition-all   
                                ${location.pathname === link.path ? 'bg-white text-coral-400' : 'text-white hover:bg-white hover:text-coral-400'}`}  
                        >  
                            {link.name}   
                        </Link>  
                    </li>  
                ))}  
            </ul>  
        </nav>  
    );  
};  

export default Navbar; 