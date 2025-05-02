import '.././styles/layout.css';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);  // Estado del menú desplegable
    const [isScrolled, setIsScrolled] = useState(false); // Estado del navbar oculto

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleNavbar = () => {
        setIsScrolled(false); // Mostrar la navbar si el usuario hace clic en el botón
    };

    useEffect(() => {
        let timer;

        const handleScroll = () => {
            clearTimeout(timer);

            if (window.scrollY > 100) {
                timer = setTimeout(() => {
                    setIsScrolled(true);
                }, 1000);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <nav className={`navbar ${isScrolled ? 'hidden' : ''}`}>
                <NavLink
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <img src="../images/favicon_logo_jars.png" className="logo" alt="Cargando..." />
                </NavLink>

                {/* Menú principal */}
                <ul className={`menu-items ${isOpen ? 'open' : ''}`} >
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#insights">Insights</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>

                {/* Botón de hamburguesa */}
                <div className="toggle_btn" onClick={toggleMenu}>
                    <i className="bi bi-text-center"></i>
                </div>
            </nav>

            {/* Botón flotante para mostrar la navbar cuando está oculta */}
            {isScrolled && (
                <div className="toggle_btn_fixed" onClick={toggleNavbar}>
                    <i className="bi bi-list"></i>
                </div>
            )}
        </div>
    );
};

export default Nav;
