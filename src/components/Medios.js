import './styles/layout.css';

const Medios = () => {
    const medios = [
        {
            titulo: 'RADIO CIUDAD',
            enlace: 'https://www.instagram.com/radiociudad103.1/p/C6vw_p9O-i_/'
        },
        {
            titulo: 'RADIO CUT',
            enlace: 'https://ar.radiocut.fm/audiocut/jose-lezama-economista-y-director-geo-generacion-estudio-opinion/'
        },
        {
            titulo: 'EL ECONOMISTA',
            enlace: 'https://eleconomista.com.ar/debate/pandemia-ya-nada-lo-mismo-nada-sera-lo-mismo-n39525'
        },
        {
            titulo: 'DIARIO PERFIL',
            enlace: 'https://www.perfil.com/noticias/economia/la-imperiosa-necesidad-de-buscar-el-equilibrio-entre-salud-y-economia.phtml'
        },
        {
            titulo: 'DNI SALTA',
            enlace: 'https://dnisalta.com/de-cuanto-es-el-millonario-costo-economico-del-paro-de-ayer-para-un-pais-sumido-en-la-pobreza/#google_vignette'
        },
        {
            titulo: 'LA GACETA',
            enlace: 'https://www.lagaceta.com.ar/nota/895180/actualidad/salud-economia-dificil-equilibrio-tiempos-covid.html'
        },
        {
            titulo: 'REVISTA MERCADO',
            enlace: 'https://mercado.com.ar/economia-y-politica/la-economia-del-pais-de-la-depresion-a-la-recuperacion/'
        },
        {
            titulo: 'REVISTA MERCADO',
            enlace: 'https://mercado.com.ar/economia-y-politica/desaceleracion-de-la-inflacion-perspectivas-y-proyecciones/'
        },
        {
            titulo: 'EL ECONOMISTA',
            enlace: 'https://eleconomista.com.ar/cryptos/el-problema-dinero-sino-confianza-gobiernos-n42103'
        },
        {
            titulo: 'CNN EN ESPAÑOL',
            enlace: 'https://cnnespanol.cnn.com/radio/2024/05/08/cuanto-deja-de-producir-argentina-por-un-dia-de-paro'
        },
        {
            titulo: 'VALOR GLOBO (BRASIL)',
            enlace: 'https://valor.globo.com/mundo/noticia/2024/05/14/argentina-registra-inflao-de-88-pontos-percentuais-em-abril-e-2894-nos-ltimos-12-meses.ghtml'
        }
    ];

    // duplicar items para efecto loop visual
    const fullMedios = [...medios, ...medios];

    return (
        <div className="notas-medios">
            <div className="notas-marquee">
                <div className="notas-track">
                    {fullMedios.map((medio, index) => (
                        <div className="nota-item" key={index}>
                            <h2>{medio.titulo}</h2>
                            <button
                                className="btn-ver-nota"
                                onClick={() => window.open(medio.enlace, '_blank')}
                            >
                                Ver Nota
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Medios;