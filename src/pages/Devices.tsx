import React from 'react';

const Devices = () => {
  const devices = [
    // Aquí deberías tener los datos de tus dispositivos
    {
      id: 1,
      name: 'Dispositivo 1',
      serialNumber: 'SN-1234',
      status: 'Online',
      ipAddress: '192.168.1.100',
    },
    // Agrega más dispositivos aquí...
  ];

  const handleDelete = (id) => {
    // Aquí puedes implementar la lógica para eliminar un dispositivo por su ID
    console.log(`Eliminar dispositivo con ID: ${id}`);
  };

  const handleModify = (id) => {
    // Aquí puedes implementar la lógica para modificar un dispositivo por su ID
    console.log(`Modificar dispositivo con ID: ${id}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Número de Serie</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2">Dirección IP</th>
            <th className="px-4 py-2">Acciones</th> {/* Nueva columna para botones */}
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id}>
              <td className="border px-4 py-2">{device.id}</td>
              <td className="border px-4 py-2">{device.name}</td>
              <td className="border px-4 py-2">{device.serialNumber}</td>
              <td className="border px-4 py-2">{device.status}</td>
              <td className="border px-4 py-2">{device.ipAddress}</td>
              <td className="border px-4 py-2">
                {/* Botón Eliminar */}
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mr-2 rounded"
                  onClick={() => handleDelete(device.id)}
                >
                  Eliminar
                </button>
                {/* Botón Modificar */}
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleModify(device.id)}
                >
                  Modificar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Devices;
