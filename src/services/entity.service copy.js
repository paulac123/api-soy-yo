//const axios = require("axios");
//const mockEntities = require("../mock/mockEntities");

//const USE_MOCK = true;

/*async function getFilteredEntities(startId, endId) {
  if (USE_MOCK) {
    const filtered = mockEntities.filter(
      (e) => e.entityId >= startId && e.entityId <= endId
    );
    if (filtered.length === 0) {
      throw {
        status: 404,
        message: `No se encontraron entidades en el rango de ID ${startId} a ${endId}`,
      };
    }
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
async function getFilteredEntities(startId, endId) {
  const entities = [];
  for (let id = startId; id <= endId; id++) {
    try {
      const response = await axios.get(
        `https://f56c0ao48b.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/${id}`
      );
      entities.push(response.data.data);
    } catch (error) {
      console.log(
        `Error al obtener entidad con ID ${id}:`,

        error.response?.data || error.message
      );

      throw {
        status: error.response?.status || 500,
        message:
          error.response?.data?.message || `Entidad con ID ${id} no encontrada`,
      };
    }
  }
  entities.sort((a, b) => {
    if (!a.name || !b.name) return 0;

    return a.name.localeCompare(b.name);
  });
  return entities;
}
//}

module.exports = {
  getFilteredEntities,
};*/
