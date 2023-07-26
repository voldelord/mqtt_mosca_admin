import React from 'react';
import { TiDeviceTablet } from 'react-icons/ti';

const CardInfo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <TiDeviceTablet size={22} color="#primary" />
      </div>

      <div className="mt-4">
        <h4 className="text-title-md font-bold text-black dark:text-white mb-4">
          Información General | Dispositivo
        </h4>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="font-medium">Identificación:</p>
            <p>espdcbce</p>
          </div>
          <div>
            <p className="font-medium">Número de Serie:</p>
            <p>ESP32DC15B80C703E</p>
          </div>
          <div>
            <p className="font-medium">mDNS Url:</p>
            <p><a href="http://espdcbce.local/">http://espdcbce.local/</a></p>
          </div>
          <div>
            <p className="font-medium">Dirección IP del Cliente:</p>
            <p>192.168.30.170</p>
          </div>
          <div>
            <p className="font-medium">Navegador del Cliente:</p>
            <p>PostmanRuntime/7.32.2</p>
          </div>
          <div>
            <p className="font-medium">Versión del Firmware:</p>
            <p>ESP32_4.1.1rc-Build-20230430</p>
          </div>
          <div>
            <p className="font-medium">Versión del Hardware:</p>
            <p>ADMINESP32 v1 00000000</p>
          </div>
          <div>
            <p className="font-medium">CPU FREQ MHz:</p>
            <p>240</p>
          </div>
          <div>
            <p className="font-medium">RAM SIZE KB:</p>
            <p>301</p>
          </div>
          <div>
            <p className="font-medium">SPIFFS SIZE KB:</p>
            <p>14</p>
          </div>
          <div>
            <p className="font-medium">FLASH SIZE MB:</p>
            <p>4</p>
          </div>
          <div>
            <p className="font-medium">Fabricante:</p>
            <p>IOTHOST</p>
          </div>
          <div>
            <p className="font-medium">Tiempo de Actividad del Sistema:</p>
            <p>1:03:30:30</p>
          </div>
          <div>
            <p className="font-medium">Cantidad de Reinicios:</p>
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
