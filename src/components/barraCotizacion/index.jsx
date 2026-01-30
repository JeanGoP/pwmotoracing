import React from "react";
import "./barraCotizacion.css";
import { useNavigate } from "react-router-dom";

const BarraCotizacion = () => {
  const navigate = useNavigate();

  const marcas = [
    { img: "/images/aktBarra.png", alt: "AKT" },
    { img: "/images/nkdBarra.png", alt: "NKD 125" },
    { img: "/images/cr4Barra.png", alt: "CR4" },
    { img: "/images/trtBarra.png", alt: "TRT" },
  ];

  const handlePagina = (ruta) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(ruta);
  };

  return (
    <div className="barra-cotizacion">
      <div className="container">
        <div className="row align-items-center">

          {/* Teléfono */}
          <div className="col-lg-4 col-md-4 col-sm-6 telefono">
            <p>608 7460144</p>
          </div>

          {/* CTA */}
          <div className="col-lg-4 col-md-4 col-sm-6 text-center">
            <p
              className="simula-credito"
              onClick={() => handlePagina("/cotizacion")}
            >
              Simula tu crédito
            </p>
          </div>

          {/* Logos */}
          <div className="col-lg-4 col-md-4 col-sm-12 logos">
            {marcas.map((marca, index) => (
              <img
                key={index}
                src={marca.img}
                alt={marca.alt}
                className="logo-marca"
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default BarraCotizacion;
