const filterSchema = require("../schemas/filter.schema");

function validateFilter(req, res, next) {
  const { error } = filterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      error: "error en validacion de datos de entrada",
      details: error.details.map((d) => d.message),
    });
  }
  next();
}

//aqui tendria que ir funcion que valida la data que envian al endpoint y el schema de validacion de campos con joi
//const validateFilterJoi = (req,res,next)=>{
//  const body = req.body;

//}
module.exports = validateFilter;
