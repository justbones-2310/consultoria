import '.././styles/layout.css';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleNavbar = () => {
        setIsScrolled(false);
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
                    <img src="../images/favicon_logo_jars.png" className="logo" alt="Logo de jARS Consultoría Estratégica" />
                </NavLink>

                <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
                    <li
                        className="submenu-container"
                        onMouseEnter={() => window.innerWidth >= 720 && setIsSubmenuOpen(true)}
                        onMouseLeave={() => window.innerWidth >= 720 && setIsSubmenuOpen(false)}
                    >
                        <NavLink
                            to="/nosotros"
                            className="submenu-toggle"
                            onClick={(e) => {
                                if (!isSubmenuOpen && window.innerWidth < 720) {
                                    e.preventDefault();
                                    setIsSubmenuOpen(true);
                                } else {
                                    setIsSubmenuOpen(false);
                                }
                            }}
                        >
                            Nosotros
                        </NavLink>
                        {(isSubmenuOpen || isOpen) && (
                            <ul className="submenu">
                                <NavLink
                                    to="/nosotros"
                                    state={{ scrollTo: 'nospresentamos' }}
                                    onClick={() => {
                                        setIsSubmenuOpen(false);
                                        setIsOpen(false);
                                    }}
                                >
                                    Nos presentamos
                                </NavLink>
                                <NavLink
                                    to="/nosotros"
                                    state={{ scrollTo: 'ceo' }}
                                    onClick={() => {
                                        setIsSubmenuOpen(false);
                                        setIsOpen(false);
                                    }}
                                >
                                    CEO y Fundador
                                </NavLink>
                                <NavLink
                                    to="/nosotros"
                                    state={{ scrollTo: 'medios' }}
                                    onClick={() => {
                                        setIsSubmenuOpen(false);
                                        setIsOpen(false);
                                    }}
                                >
                                    Medios
                                </NavLink>
                            </ul>
                        )}
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            state={{ scrollTo: 'insights' }}
                            onClick={() => setIsSubmenuOpen(false)}
                        >
                            Insights
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            state={{ scrollTo: 'servicios' }}
                            onClick={() => setIsSubmenuOpen(false)}
                        >
                            Servicios
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/"
                            state={{ scrollTo: 'contacto' }}
                            onClick={() => setIsSubmenuOpen(false)}
                        >
                            Contacto
                        </NavLink>
                    </li>
                </ul>

                <div className="toggle_btn" onClick={toggleMenu}>
                    <i className="bi bi-text-center"></i>
                </div>
            </nav>

            {isScrolled && (
                <div className="toggle_btn_fixed" onClick={toggleNavbar}>
                    <i className="bi bi-list"></i>
                </div>
            )}
        </div>
    );
};

export default Nav;
