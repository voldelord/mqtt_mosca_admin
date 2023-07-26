import React from 'react';
import { HiOutlineChip } from 'react-icons/hi';

const CardOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <HiOutlineChip size={22} color="#primary" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            ESP32DC1
          </h4>
          <span className="text-sm font-medium">Numero de Serie de Equipo</span>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
