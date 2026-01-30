import React,{useContext} from 'react';
import './cotizador.css'
import { LanguageContext } from '../../context/context';
import { useEffect } from 'react';
export function Cotizador(){
    const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
    const { configuracionData = [],getCofiguracion } = useContext(LanguageContext);
    useEffect(() => {
      if (configuracionData) {
        getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
        
      }
    }, []);
    console.log(configuracionData)
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);
    const rawProducto = localStorage.getItem('producto');

    const id_producto =
      rawProducto && rawProducto !== 'null' && rawProducto !== 'undefined'
        ? rawProducto
        : null;
    
    const rutaBase = configuracionData?.rutaCotizador;
    
    const rutaIframe = id_producto
      ? `${rutaBase}?producto=${id_producto}`
      : rutaBase;
    
    return(
         <div>
        {/* <div style={{background: "white"}}> */}
            <div className=''>
                    <div className="">
                        <div className="row row__Cotizador">
                            <div className="col-md-12 coll-sm-12 container__row__Cotizador row__Cotizador__"
                                  style={{
                                     backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${configuracionData?.rutaPortadaCotizador}')`
                                 }}
                            >
                                <label className="label__row__Cotizador"> Cotizador </label>
                            </div>
                        </div>
                </div>
             </div>
              <div className='' style={{background:'#000'}}>
                <div className="row" style={{paddingTop:'20px'}}>
                    <div className="col-md-12 coll-sm-12 row__iframe__Cotizador">
                          <iframe id="cotizador" 
                                //   src="https://aburramotos.7-24.co/mercadeo/leads/iframe/2f4c07b6b8b5abfee7ed89cd0befe0dd/" 
                                src={rutaIframe}
                                  name="myIFrame" 
                                  allow="geolocation"
                                  className="iframe__row__Cotizador">
                          </iframe>  
                    </div>
                </div>
                </div>
        </div>
    )
}

