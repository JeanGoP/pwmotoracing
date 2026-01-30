import React, { useContext } from 'react';
import Carousel from '../../components/carousel';
import CardTecnologia from '../../components/cardTecnologia';
import {
  jsonCardTecnologia,
  jsonSeccionMotoDetallada,
  jsonBarraPorcentaje,
  jsonSeccionBarraPorcentaje,
  jsonTituloSeccionBarraPorcentaje,
  jsonDescripcionTecnica,
  jsonLinkMarcas,
  jsonCardMarcasMotos,
  jsonBlog,
  jsonAliadosFinancieros
} from '../../constants/constants';
import SeccionMotoDetallada from '../../components/seccionMotoDetallada';
import BarraPorcentaje from '../../components/barraPorcentaje';
import SeccionBarraPorcentaje from '../../components/seccionBarraPorcentaje';
import TituloSeccionBarraPorcentaje from '../../components/tituloSeccionBarraPorcentaje';
import DescripcionSeccionBarraPorcentaje from '../../components/descripcionSeccionBarraPorcentaje';
import VideoPublicitario from '../../components/videoPublicitario';
import MarcasPublicitarias from '../../components/marcasPublicitaria';
import CatalogoMoto from '../../components/catalogoMoto';
import './home.css';
import { LanguageContext } from '../../context/context';
import CarruselAliados from './carousel';
import AnimatedCounter from './animator';
import { useEffect } from 'react';
import CardMarcaMoto from '../../components/cardMarcaMoto';
import { backgroundImages } from 'polished';
import CardBlog from '../../components/cardBlog';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
      // console.log(configuracionData)
    }
  }, []);

  const textoCompleto = configuracionData?.descripcionMoto_1 || '';
  const mitad = Math.floor(textoCompleto.length / 2);
  let puntoDivision = textoCompleto.indexOf(' ', mitad);
  if (puntoDivision === -1) puntoDivision = mitad;

  const descripcion1 = textoCompleto.slice(0, puntoDivision).trim();
  const descripcion2 = textoCompleto.slice(puntoDivision).trim();

  const jsonItemsTecnicos = [
    {
      titulo: 'Torque(Nm)',
      // descripcion: configuracionData?.arranqueMoto_2 || '',
      descripcion: '15.5 Nm @ 7.500 RPM'
    },
    {
      titulo: 'Caja',
      //descripcion: configuracionData?.torqueMoto_2 || '',
      descripcion: '6 velocidades'
    },
    {
      titulo: 'Arranque',
      //descripcion: configuracionData?.bateriaMoto_2 || '',
      descripcion: 'Eléctrico'
    },
    {
      titulo: 'Freno Delantero',
      //descripcion: configuracionData?.transmisionMoto_2 || '',
      descripcion: 'Disco 272 mm,pinza 2 pistones'
    },

    {
      titulo: 'Freno Trasero',
      // descripcion: configuracionData?.pesoMoto_2 || '',
      descripcion: 'Disco 230 mm'
    },
    {
      titulo: 'Suspensión Delantera',
      //descripcion: configuracionData?.tanqueMoto_2 || '',
      descripcion: 'Telescópica Hidráulica'
    }
  ];

  const scrollToCatalogoMoto = () => {
    const section = document.getElementById("contenidoMotocicleta");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",  // top
      });
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  const handleBlog = () => {
    navigate("/blog");
  }

  return (

    <div style={{ background: "" }}>

      <div className='container-fluid conte--carousel'>
        <div className="row justify-content-center">
          <div className="col-12">
            <Carousel img={configuracionData?.rutaImgCarrousel || ''} />
          </div>

        </div>
      </div>
      <div>
        <div style={{ background: "#000000" }}>
          <div className='container-fluid'>
            <div className="row div__padding__centro " style={{ position: 'relative' , paddingBottom:'180px'}}>
              {/* {jsonSeccionMotoDetallada.map((item, idx) => ( */}
              <SeccionMotoDetallada
                key="UYTZ"
                ImagenMoto="/images/TTrmotoseccion.png.webp"
                Titulo='AKT 200 TTR'
                Subtitulo='Tú elige el plan, nosotros tenemos las TT'
                Descripcion_1='La TTR 200 es una moto enduro para todo tipo de terrenos, diseñada para que día a día vivas una aventura diferente sin límites rodando en la enduro más completa del mercado. Única motocicleta en esta categoría con un motor de 197.3 cc, 6 cambios y un sistema de frenos de disco en ambas ruedas.'
                Descripcion_2={descripcion2}
                // Transmision={configuracionData?.transmisionMoto_1 || ''}
                // Cilindraje={configuracionData?.cilindrajeMoto_1 || ''}
                // Motor={configuracionData?.motorMoto_1 || ''}
                Transmision='120 KG'
                Motor='16.5 HP @8500 RPM'
                Cilindraje='197 CC'
                ColorTitulo={configuracionData?.colorTituloHome || ''}
                ColorCuerpo={configuracionData?.colorCuerpo || ''}
              />
              {/* ))} */}
            </div>
          </div>
        </div>

        <div style={{ background: "white" }}>
          <div className='container-fluid contenidoCatalogoMoto'>

            <div className="row mb-5" style={{ marginTop: '10px' }} id='contenidoMotocicleta'>
              <CatalogoMoto ColorTitulo={configuracionData?.colorTituloHome || ''} ColorPagina={configuracionData?.colorPagina || ''} />
            </div>
          </div>
        </div>
        <div style={{ background: "#000", paddingBottom: '15px' }}>
          <div className='container'>
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
                <img src="/images/cr4motocicleta.jpg" alt="Moto CR4" className="img-fluid " style={{ width: '100%', height: 'auto' }} />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <TituloSeccionBarraPorcentaje
                  Titulo='Deportiva'
                  Subtitulo='AKT CR4 200 Pro'
                  // ColorSubtiutlo={configuracionData?.colorTituloHome || ''}
                  // ColorCuerpo={configuracionData?.colorCuerpo || ''}
                  colorCuerpo='#d8d8d8'
                  ColorSubtiutlo='#d8d8d8'
                  detalle='Nos enorgullece presentar la nueva AK CR4 200 PRO, una naked de aspecto imponente y robusto con un diseño que no pasa desapercibido; un motor probado por la experiencia y detalles que la harán deseable por el público que busca economía sin dejar de lado el diseño y rendimiento.'
                />

                <div className="row gy-3">
                  {/* {jsonSeccionBarraPorcentaje.map((item, idx) => ( */}
                  <SeccionBarraPorcentaje
                    key="PNTY"
                    Motor='RE 4 Tiempos SOHC'
                    Cilindraje='197 cc'
                    potencia='16.5 Hp @ 8.000 RPM'
                    // ColorCuerpo={configuracionData?.colorCuerpo || ''}
                    ColorCuerpo='#d8d8d8'
                  />
                  {/* ))} */}
                </div>
              </div>
            </div>

            <section className="row contenido__label__Especificacion text-center my-5">
              {/* <label className="EspecificacionesTecnicas__Titulo__Home" style={{ color: configuracionData?.colorCuerpo }}> */}
              <label className="EspecificacionesTecnicas__Titulo__Home" style={{ color: '#d8d8d8' }}>
                ESPECIFICACIONES TÉCNICAS
              </label>
            </section>

            <div className="row g-4 mb-5">
              {jsonItemsTecnicos.map((item, idx) => (
                <DescripcionSeccionBarraPorcentaje
                  key={item.titulo || idx}
                  Titulo={item.titulo}
                  Descripcion={item.descripcion}
                  // ColorCuerpo={configuracionData?.colorCuerpo}
                  ColorCuerpo='#d8d8d8'
                />
              ))}
            </div>


          </div>

        </div>
        <div className='conten--video--youtube'>
          <div>
            <div className="row--video--youtube--">
              <VideoPublicitario Link={configuracionData?.rutaYoutube} />
            </div>
          </div></div>
        {/* </main> */}

        <div className='' style={{ background: '#000' }} >
          <main className="container" style={{ padding: '1px' }}>
            <section className="row contenido__label__Especificacion text-center my-5 m-3">
              <label className="NuestraAliado__Titulo__Home" style={{ color: '#fff', paddingBottom: '20px' }}>
                ALIADOS FINANCIEROS
              </label>
              <CarruselAliados jsonImagen={jsonAliadosFinancieros} />
              {/* <MarcasPublicitarias jsonImagen={jsonAliadosFinancieros} /> */}
            </section>
          </main>
        </div>
        <div style={{ background: "#eeeeee" }}>
          <div className="contenido__NuestrasMarcas__Home" style={{ background: '#000', paddingTop: '40px' }}>
            <div className="container">
              <section className="row text-center" >
                <label className="TituloNuestraMarca">NUESTRAS MARCAS</label>
              </section>

              <div className="row g-3 justify-content-center mb-1">
                <MarcasPublicitarias jsonImagen={jsonLinkMarcas} />
              </div>
            </div>
          </div>
        </div>
        <div className='' style={{ background: '#000' }}>
          <div className='container' style={{ paddingBottom: '40px' }}>
            <div className='row' style={{ paddingTop: '30px' }}>
              <div className='col-12' style={{ textAlign: 'center' }}>
                <h3 className='ultimoArticulos'>ÚLTIMOS ARTÍCULOS</h3>
              </div>
            </div>
            <div className="col-12" style={{ paddingTop: '30px' }}>
              {jsonBlog.map((item, index) => (
                <CardBlog
                  key={index}
                  titulo={item.titulo}
                  fecha={item.fecha}
                  imagen={item.imagen}
                  objecto={item}
                  opcion='B'
                />
              ))}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
