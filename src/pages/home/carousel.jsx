// components/CarruselAliados.jsx
import React from 'react';
import "../../components/marcasPublicitaria/marcasPublicitarias.css";

const CarruselAliados = ({ jsonImagen }) => {
  const chunkArrayss = (array, size) => {
    const chunksss = [];
    for (let i = 0; i < array.length; i += size) {
      chunksss.push(array.slice(i, i + size));
    }
    return chunksss;
  };

  const slidesss = chunkArrayss(jsonImagen, 3);

  return (
    <div id="carouselFinanciero" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        {slidesss.map((grupo, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="row justify-content-center">
              {grupo.map((item, i) => (
                <div key={i} className="col-4 contenido__MarcasPublicitarias">
                  <img
                    src={item.url}
                    className="img-fluid imagen__MarcasPublicitarias"
                    alt="Marca"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>

      {/* Controles */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselFinanciero" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" style={{position:'relative', right:'45px'}}/>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselFinanciero" data-bs-slide="next">
        <span className="carousel-control-next-icon" style={{position:'relative', left:'45px'}}/>
      </button>
    </div>
  );
};

export default CarruselAliados;
