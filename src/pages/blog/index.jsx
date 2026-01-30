import React, { useEffect, useState, useContext } from "react";
import "./blog.css"
import { LanguageContext } from '../../context/context';
import CardBlog from "../../components/cardBlog";
import { jsonBlog } from "../../constants/constants";

export function Blog() {
    const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
    const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
    useEffect(() => {
        if (configuracionData) {
            getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');

        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="" >
            <div className="contenido__posventa">
                <div className="row ">
                    <div className="col-md-12 coll-sm-12 container__row__Posventa"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${configuracionData?.rutaPortadaBlog}')`
                        }}
                    >
                        <label className="label__row__Posventa">  Blog </label>
                    </div>
                </div>
                <div className="" style={{ background: '#000' }}>
                    <div className="container" style={{ paddingBottom: '100px' }}>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12" style={{ paddingTop: '40px', textAlign: 'center' }}>

                                <p className="h2Blog">Artículos y noticias</p>

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
                                />
                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

