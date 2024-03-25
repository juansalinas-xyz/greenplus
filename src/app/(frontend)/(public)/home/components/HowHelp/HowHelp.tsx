import React from "react";

function HowHelp() {
  return (
    <div className="my-12 w-screen flex justify-center">
      <div style={{width: '70%'}}>
        <div className="flex flex-row gap-1 mb-4 text-xl font-black">
          <p className="text-black">¿Cómo ayuda</p>
          <p className="flex text-green_greenplus">Greenplus</p>
          <p className="text-black">?</p>
        </div>
        <div className="h-1 w-full flex mb-6">
          <div className="flex-1 bg-green_greenplus rounded-l-xl"></div>
          <div className="flex-1 bg-black rounded-r-xl"></div>
        </div>
        <div className="flex items-end w-full h-96 mb-12 rounded-lg bg-cover bg-center shadow-xl" style={{backgroundImage: 'url(/landing/howhelp/fondo_howhelp.jpg)'}}>
          <div className="w-full h-2/5 py-3 px-14 bg-green_greenplus bg-opacity-80 rounded-b-lg">
            <p className="text-white text-justify">
              Greenplus emerge como la solución innovadora y eficaz para el impacto devastador de las emisiones de carbono en nuestro medio ambiente. En nuestra plataforma, los productores pueden dar un paso revolucionario al tokenizar los carbonos capturados, permitiendo así que empresas y personas compensen su huella de carbono de manera más accesible y transparente. 
              Además, brindamos a las empresas la oportunidad de obtener etiquetas de productos de carbono neutro, destacando su compromiso con la sostenibilidad.
              Greenplus está transformando la lucha contra el cambio climático, ofreciendo una vía práctica y efectiva para que todos contribuyamos a la construcción de un futuro más sostenible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowHelp;
