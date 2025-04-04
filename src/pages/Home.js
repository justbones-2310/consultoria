import { useEffect } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import './../styles/pages/Home.css';

const Home = (props) => {


    useEffect(() => {
        const comments = document.querySelectorAll('.comment');
        const observerComments = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        comments.forEach(comment => {
            observerComments.observe(comment);
        });


        const title = document.querySelector('.title');
        const button1 = document.querySelector('.button1');
        const flipContainer = document.querySelector('.flip-container');
        const flipContainer2 = document.querySelector('.flip-container2');
        const focus = document.querySelector('.focus');
        const container3 = document.querySelector('.container3');

        const observerServices = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        if (title) observerServices.observe(title);
        if (button1) observerServices.observe(button1);
        if (flipContainer) observerServices.observe(flipContainer)
        if (flipContainer2) observerServices.observe(flipContainer2)
        if (focus) observerServices.observe(focus);
        if (container3) observerServices.observe(container3);

        return () => {
            comments.forEach(comment => {
                observerComments.unobserve(comment);
            });
            if (title) observerServices.unobserve(title);
            if (button1) observerServices.unobserve(button1);
            if (flipContainer) observerServices.unobserve(flipContainer);
            if (flipContainer2) observerServices.unobserve(flipContainer2);
            if (focus) observerServices.unobserve(focus);
            if (container3) observerServices.unobserve(container3);
        };
    }, []);



    const handleScrollToServices = () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    };



    const handleBoxClick = (e) => {
        const box = e.currentTarget;
        const h2 = box.querySelector('h2');


        // Verifica si el box ya está expandido
        const isExpanded = box.classList.contains('expanded');

        // Oculta cualquier box previamente expandido
        document.querySelectorAll('.box').forEach(b => {
            b.classList.remove('expanded');
            b.querySelector('h2').style.opacity = '1'; // Restaura h2

        });

        if (!isExpanded) {
            box.classList.add('expanded');
            h2.style.opacity = '0'; // Oculta el h2
        }
    };

    useEffect(() => {
        const elementsToObserve = document.querySelectorAll(
            '.tables, .tables .titulo, .tables .columns .textos'
        );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        elementsToObserve.forEach(element => observer.observe(element));

        return () => elementsToObserve.forEach(element => observer.unobserve(element));
    }, []);

    const handleEmailClick = (event) => {
        event.preventDefault(); // Evita que el enlace navegue directamente
        const email = "jars@gmail.com";
        const subject = encodeURIComponent("Consulta sobre sus servicios");
        const body = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios.");

        // Abrir Gmail en una nueva ventana
        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
            '_blank'
        );
    };

    const data = [
        {
            titulo: "Charlas Ejecutivas",
            descripcion: "Realizamos sesiones interactivas donde expertos comparten conocimiento sobre tendencias del mercado y análisis de datos. Esto enriquece la toma de decisiones."
        },
        {
            titulo: "Mesas de Diálogo",
            descripcion: "Fomentamos el intercambio de ideas entre líderes de diversas industrias. Las mesas de trabajo establecen un espacio para discutir desafíos y soluciones innovadoras."
        },
        {
            titulo: "Formación Continua",
            descripcion: "Ofrecemos capacitación especializada para empresas, enfocada en áreas críticas como análisis de datos, permitiendo que el personal se mantenga actualizado en mejores prácticas."
        }
    ];

    return (
        <div className='home'>

            <div className='start'>

                <img src="/images/option3.1.jpg" alt="Fondo 2" className="bg-image1" />
                <img src="/images/option14.jpg" alt="Fondo 1" className="bg-image2" />

                <div className='welcome'>

                    <div className='title'>
                        <h1>
                            Consultoría <br />
                            estratégica
                        </h1>
                    </div>


                    <div className='button' onClick={handleScrollToServices}>
                        <div className="button1">
                            Servicios
                        </div>
                    </div>

                </div>

            </div>

            <div className='comment'>

                <h2>
                    Nos enfocamos en optimizar procesos y estrategias
                    para empresas
                </h2>

            </div>




            <div className='us' id='nosotros'>

                <div className='item' >

                    <div className='flip-container'>

                        <div className='front'>
                            <img src="/images/option6.1.jpg" alt="grupo" className="people" />
                        </div>

                        <div className='back'>
                            <img src="/images/option15.jpg" alt="Fondo 2" className="back-image" />
                            <h2>
                                Nuestra misión es mejorar la eficiencia mediante un enfoque
                                integral y personalizado
                            </h2>
                        </div>

                    </div>

                </div>


                <div className='container'>

                    <div className='flip-container2'>

                        <div className='front1 text-1'>
                            <h2>Trabajamos de lo que nos apasiona</h2>
                            <p>
                                Somos un equipo de expertos que utiliza las últimas herramientas
                                de gestión profesional como soporte para los procesos de toma
                                de decisiones. <br />
                                Formamos parte del equipo de profesionales en ramas clave como
                                política, economía, psicología, BI, programación, entre otros.
                            </p>
                        </div>

                        <div className='back2'>
                            <h2>Líder de Proyectos</h2>
                            <img src="/images/lider-proyecto.jpg" alt="Líder de Proyectos" className="leader-image" />
                            <a href="/docs/CV-JLA-2024.pdf" download="CV-JLA-2024.pdf" className="cv-link">
                                Descargar CV
                            </a>
                        </div>

                    </div>

                </div>

            </div>



            <div className='comment'>

                <h2>
                    Dentro de tu empresa existen grandes oportunidades
                </h2>

            </div>



            <div className='questions-section' id='insights'>

                <h2>¿Te has preguntado...?</h2>

                <ul className="questions-list">
                    <li><FaCheckCircle className="check-icon" /> ¿Por qué la productividad de tu equipo no mejora, aunque inviertas más recursos?</li>
                    <li><FaCheckCircle className="check-icon" /> ¿Por qué la comunicación entre departamentos es lenta y genera malentendidos?</li>
                    <li><FaCheckCircle className="check-icon" /> ¿Por qué algunos proyectos nunca avanzan y se estancan sin razón aparente?</li>
                    <li><FaCheckCircle className="check-icon" /> ¿Sientes que, a pesar del esfuerzo, los resultados financieros no reflejan el potencial de tu empresa?</li>
                    <li><FaCheckCircle className="check-icon" /> ¿Tu empresa tiene dificultades para adaptarse a los cambios del mercado?</li>
                </ul>

                <div className='text-3'>
                    <h2>
                        <span className="jars2">jARS</span> se especializa en consultoría enfocada en optimizar procesos y
                        estrategias para empresas. Nuestra misión es mejorar la <span> eficiencia </span>
                        mediante un enfoque integral y personalizado.
                    </h2>
                </div>
            </div>


            <div className='comment'>

                <h2>
                    Llevamos adelante análisis de datos que
                    pensamos esenciales para entender el rendimiento sectorial
                </h2>

            </div>

            <div className='analisis-sectorial'>

                <div className='focus'>
                    <img src="/images/option12.jpg" alt="idea" />
                </div>

                <div className='container3'>

                    <div className='text-4'>

                        <h2 className='principal'> Análisis Sectorial</h2>

                        <div className='columns'>
                            <div className='textos'>

                                <h2> Beneficios</h2>
                                <p>
                                    Ofrecemos estudios sectoriales que ayudan a las empresas a tomar
                                    decisiones estratégicas basadas en datos. <br /> Esto facilita la
                                    identificación de nichos de mercado y potencial de crecimiento.

                                </p>

                            </div>

                            <div className='textos'>

                                <h2> Perspectivas</h2>
                                <p>
                                    El análisis sectorial se centra en identificar tendencias y oportunidades
                                    en distintos sectores económicos, brindando a las empresas información
                                    crucial para mejorar su competitividad.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div className='comment'>

                <h2>
                    Utilizamos herramientas avanzadas para obtener insights valiosos
                    y prácticos
                </h2>

            </div>


            <div className='services' id='services'>
                <div className='container-2'>
                    <div className='box' onClick={handleBoxClick}>
                        <h2>Web Scraping</h2>
                        <p className='description'>
                            Utilizamos técnicas de extracción de datos para obtener reportes del
                            mercado y generar informes detallados.
                        </p>

                        <p className='benefit'>Mejorando la toma de decisiones informadas.</p>
                    </div>

                    <div className='box' onClick={handleBoxClick}>
                        <h2>Diseño de Dashboards</h2>
                        <p className='description'>
                            Creamos tableros de gestión que visualizan datos críticos en
                            tiempo real.
                        </p>

                        <p className='benefit'>Facilitando el monitoreo y la gestión de recursos.</p>
                    </div>

                    <div className='box' onClick={handleBoxClick}>
                        <h2>Reingeniería de Procesos</h2>
                        <p className='description'>
                            Desarrollamos proyectos para optimizar la agilidad organizacional.
                        </p>

                        <p className='benefit'>Aumentando la productividad y la reducción de costos.</p>
                    </div>

                    <div className='box' onClick={handleBoxClick}>
                        <h2>Consultoría de Datos</h2>
                        <p className='description'>
                            Ofrecemos asesoramiento y soluciones estratégicas para optimizar
                            el uso de los datos. Para lograrlo brindamos asistencia en data science.
                        </p>

                        <p className='benefit'> Ayudando a identificar oportunidades de mercado y a desarrollar
                            estrategias innovadoras. </p>
                    </div>

                    <div className='box' onClick={handleBoxClick}>
                        <h2> Integración de API </h2>
                        <p className='description'>
                            Implementamos la conexión de diferentes sistemas, aplicaciones o servicios
                            a través de APIs para permitir la comunicación y el intercambio de datos entre ellos,
                        </p>

                        <p className='benefit'> Facilitando la incorporación de nuevas funcionalidades y servicios, impulsando
                            la innovación.</p>
                    </div>
                </div>
            </div>


            {/* Nueva sección: Mesas de Trabajo */}
            <div className="tables">
                <h2 className="head">Mesas de trabajo pensadas <br></br>para que alcancemos juntos tus objetivos </h2>
                <div className="columns">
                    {data.map((item, index) => (
                        <div key={index} className="textos">
                            <h2>{item.titulo}</h2>
                            <p>{item.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>



            <div className='comment'>

                <h2>
                    Grandes logros siempre son el resultado de grandes esfuerzos
                </h2>

            </div>


            <div className="contacto" id='contacto'>


                <div className="contacto-info">

                    <div className="contacto-datos">
                        <h2>Pongamos en Contacto</h2>

                        <p>
                            <strong>Email:</strong>
                            <a
                                href="mailto:jars@gmail.com"
                                onClick={handleEmailClick}
                            >
                                jars.argentina@gmail.com
                            </a>
                        </p>

                        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jos%C3%A9-lezama-8baa1049/" target="_blank" rel="noopener noreferrer">Perfil de LinkedIn</a></p>

                        <p>
                            <strong>Teléfono:</strong>
                            <a href="tel:+5491150573476"> +54 9 11 5057-3476  </a>
                        </p>
                    </div>

                    <div className="contacto-mapa">
                        <h2>Nuestra Ubicación</h2>
                        <iframe
                            title="Mapa de Buenos Aires"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52558.34051536834!2d-58.4408036778212!3d-34.61565456531057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaccc8cd31c5%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2s!4v1700000000000"

                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

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

export default Home;