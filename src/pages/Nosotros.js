import { useLocation } from 'react-router-dom';
import './../styles/pages/Nosotros.css'
import { useEffect, useState } from 'react';
import Medios from '../components/Medios';

const Nosotros = (props) => {

    useEffect(() => {
        const focusedElements = document.querySelectorAll('.focused-text, .focused-text-right');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        });

        focusedElements.forEach(el => observer.observe(el));

        return () => {
            focusedElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            title: 'Nuestra misión',
            content: 'Transformar los desafíos en oportunidades, integrando metodologías avanzadas y enfoques innovadores que permitan a nuestros clientes crecer en un mundo competitivo y en constante evolución. '
        },
        {
            title: 'Nuestra visión',
            content: 'Ser referentes en consultoría estratégica y tecnológica, impulsando el desarrollo sostenible y la eficiencia organizacional a través de soluciones inteligentes y personalizadas.'
        }
    ];

    const extraItems = [
        {
            title: 'Presentación',
            content: 'Economista recibido de la UBA. Actualmente se desempeña como Gerente de Planificación y Control de Gestión en la Operadora Ferroviaria Sociedad del Estado – SOFSE – y como Director de Proyectos en GEO - Estudio y Opinión. Fue Coordinador de Análisis de Procesos dependiente de la Dirección de Procesos e Integraciones de la Dirección Nacional de Sistemas de Administración y Firma Digital de la Secretaría de Modernización Administrativa. Fue Coordinador de Software Público en el Ministerio de Modernización de la Nación dependiente de la Oficina Nacional de Tecnologías de la Información de la Subsecretaría de Tecnologías y Ciberseguridad. Fue asistente de proyectos especializado en el análisis de herramientas de gestión IT con aplicación en el ámbito contable, financiero y presupuestario del Sector Público y Privado en Fundación GEO.'
        },
        {
            title: 'Experiencia',
            content: 'Cuenta con experiencia en la Universidad de Buenos Aires en las áreas de Presupuesto, Finanzas y Contabilidad en la implementación de un nuevo software de gestión – SIU Pilagá – para la administración de recursos y gastos de esa casa de estudios. Es consultor en temas de Gestión por Resultados e Indicadores para Control de Gestión. Fue responsable en la coordinación de proyectos de investigación enfocados en la problemática económica con impacto social. Se desempeñó como docente titular de Introducción a la Economía en el Instituto Universitario River Plate, Jefe de Trabajos Prácticos de Práctica Profesional Supervisada II en la Universidad Nacional del Oeste y como capacitador en organizaciones públicas y privadas en temas de presupuesto y evaluación de la gestión en las organizaciones. Cabe destacar que se desempeñó como auxiliar docente de la materia Teoría Contable, Estadística I y Macroeconomía en la Universidad de Buenos Aires.'
        },
        {
            title: 'CV',
            content: (
                <a href="/docs/CV-JLA-2024.pdf" download="CV-JLA-2024.pdf" className="cv-completo-link">
                    Para descargar el CV de José Lezama Altuna, haga clic <strong>ACÁ.</strong>
                </a>
            )
        }
    ];

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // le da tiempo al DOM a renderizar
            }
        }
    }, [location]);

    return (
        <div className='equipo' id='equipo'>

            <div className='nosotros-container'>

                <img src='/images/IMG_2401.jpg' alt='Nosotros' className='nosotros-img' />
                <img src='/images/equipo.jpg' alt='Nosotros' className='equipo-img' />

                <div className='nosotros-text'>

                    <div className='sumate focused-text'>
                        <h1 >
                            Somos <br /> un equipo <br />que resuelve
                        </h1>
                    </div>
                </div>
            </div>

            <div className='equipo-text' id='nospresentamos'>
                <div className='equipo-text-container'>

                    <div className='responsive-text'>

                        <h6 className='focused-text'> Trabajemos juntos </h6>
                        <p>
                            En <strong>jARS</strong> creemos que la clave del éxito radica en la combinación de visión estratégica,
                            análisis preciso y tecnología innovadora. Somos una consultora dedicada a proporcionar soluciones
                            integrales en <strong>estrategia, planificación, indicadores, economía y tecnología,</strong>
                            ayudando a organizaciones a alcanzar sus objetivos con
                            eficiencia y sostenibilidad.
                        </p>
                    </div>

                    <div className='block focused-text'>
                        <h1> Generación de un impacto positivo </h1>
                    </div>

                    <div className='responsive-text'>
                        <p>
                            Nuestro equipo está conformado por especialistas con una trayectoria sólida en el
                            análisis de datos, el diseño de modelos estratégicos y la implementación de
                            herramientas tecnológicas de última generación. Trabajamos de la mano con
                            empresas, instituciones y gobiernos para <strong>optimizar procesos, mejorar la toma de
                                decisiones y generar impacto en entornos altamente dinámicos.</strong>
                        </p>
                    </div>
                </div>

                <div className='highlight'>
                    <img src="/images/impacto.jpg" alt="cargando" className="impacto" />
                </div>

            </div>

            <div className='fixed'>

            </div>

            <div className='mision-vision'>

                <div className='focused-text'>

                    <h2>
                        Ideamos, <br />Creamos y <br />Transformamos
                    </h2>

                </div>


                <div className="acordeon-container">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`accordion-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggleItem(index)}
                        >
                            <div className="accordion-title">
                                <span>{item.title}</span>
                                <span className="plus-icon"></span>
                            </div>
                            {openIndex === index && (
                                <div className="accordion-content">
                                    <p>{item.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>

            <div className='focused-text'>

                <h2>
                    En jARS no solo ofrecemos asesoramiento:
                </h2>

            </div>

            <div className='focused-text-right'>

                <h2>
                    Nos convertimos en <br />
                    aliados estratégicos <br />
                    para potenciar el <br />
                    éxito de nuestros <br />clientes.
                </h2>

            </div>

            <div className='manager-container' id='ceo'>

                <div className='manager'>

                    <div className='box-container'>
                        <h6 className='focused-text'>
                            El éxito es un camino que podemos recorrer juntos
                        </h6>

                        <p className='block-ceo focused-text'> José Lezama Altuna <br></br> CEO y Fundador </p>
                    </div>


                    <div className='highlight'>
                        <img src='/images/compromiso_jars2.jpg' alt='cargando' className='manager-img' />
                    </div>

                </div>

                <div className="acordeon-container extra-items">
                    {extraItems.map((item, index) => (
                        <div
                            key={index}
                            className={`accordion-item extra-item ${openIndex === index + items.length ? 'open' : ''}`}
                            style={{ animationDelay: `${index * 0.3}s` }} // Añadir retraso escalonado
                            onClick={() => toggleItem(index + items.length)}
                        >
                            <div className="accordion-title">
                                <span>{item.title}</span>
                                <span className="plus-icon"></span>
                            </div>
                            {openIndex === index + items.length && (
                                <div className="accordion-content">
                                    <p>{item.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>

            <div className='focused-text'>

                <h2>
                    Notas Periodísticas
                </h2>

            </div>


            <div className='notes' id='medios'>
                <Medios />
            </div>


            {/* Botón flotante de WhatsApp */}
            <a
                href="https://wa.me/5491150573476"
                className="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="bi bi-whatsapp"></i>
            </a>
        </div>
    );
}

export default Nosotros;