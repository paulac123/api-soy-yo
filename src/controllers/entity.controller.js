const entityService = require("../services/entity.service");

async function filterEntities(req, res) {
  try {
    const { startId, endId } = req.body;

    const result = await entityService.getFilteredEntities(startId, endId);

    res.status(200).json(result);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ Error: error.message || "Error interno del servidor" });
  }
}

module.exports = { filterEntities };
