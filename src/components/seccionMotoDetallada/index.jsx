import React from "react";
import { mix } from 'polished';
import './seccionMotoDetallada.css'
import { useNavigate } from "react-router-dom";
function isValidHex(color) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

const SeccionMotoDetallada = ({ ImagenMoto, Titulo, Subtitulo, Descripcion_1, Descripcion_2, Motor, Cilindraje, Transmision, ColorTitulo, ColorCuerpo }) => {
  const gray = '#808080';
  const rutalogin = useNavigate();
  let newColor = ColorCuerpo;
  if (ColorCuerpo && isValidHex(ColorCuerpo)) {
    newColor = mix(0.5, gray, ColorCuerpo);
  }

  const handlePagina = (ruta, seccionId = null) => {
   
    if (ruta === "/" && seccionId) {
      rutalogin(ruta);
      setTimeout(() => {
        const elemento = document.getElementById(seccionId);
        if (elemento) {
          elemento.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    } else {
  
      window.scrollTo({ top: 0, behavior: "smooth" });
  
      setTimeout(() => {
        rutalogin(ruta);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 400);
      }, 300);
    }
  };
  return (
    <div className="contenido__seccionMotoDetallada h-100">
      <div className="container">
        <div className="row" style={{ textAlign: 'center' }}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="tituloseccionDetalle">
              Encuentra tu punto mas cercano
            </p>
            <p className="detalleseccionMoto">
              Tu moto está más cerca de lo que crees, tenemos presencia nacional con nuestros puntos de  venta, centros de servicio y distribuidores autorizados.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="tituloseccionDetalle">
              Te esperamos en nuestros centros de
            </p>
            <p className="tituloseccionDetalle">
              servicios
            </p>
            <p className="tituloseccionDetalleVisit">
              ¡Ven visítanos!
            </p>
            <a

              className="btn btn-primary btn-cotizar" onClick={()=>handlePagina('/visitanos')}
            >
              VER MAPA
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 mb-4 h-100">
            <div className="card__SeccionMotoDetallada">
              <img src={ImagenMoto} className="imagen__seccionMotoDetallada" alt="..." />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">

            <div className="row footer__descripcion__seccionMotoDetallada h-100">
              <div className="col-12" style={{ borderTop: '2px solid #ff0000' }}></div>
              <div className="col-12 titulo_inicialAKT" style={{ textAlign: 'left' }}><p>Vive tus aventuras únicas con tu</p> </div>
              <div className="col-12 tituloAKT" ><p>{Titulo}</p> </div>
              <div className="col-12 subtituloAKT" ><p>{Subtitulo}</p> </div>
              <div className="col-12 descripcionAKT" ><p>{Descripcion_1}</p> </div>
              <div className="col-lg-4 col-md-4 col-sm-12 footer__item">
                <label className="footer__label__seccionMotoDetallada">POTENCIA</label>
                <p className="footer__p__seccionMotoDetallada">{Motor}</p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 footer__item">
                <label className="footer__label__seccionMotoDetallada">CILINDRAJE</label>
                <p className="footer__p__seccionMotoDetallada">{Cilindraje}</p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 footer__item">
                <label className="footer__label__seccionMotoDetallada">PESO</label>
                <p className="footer__p__seccionMotoDetallada">{Transmision}</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

  )

}

export default SeccionMotoDetallada;