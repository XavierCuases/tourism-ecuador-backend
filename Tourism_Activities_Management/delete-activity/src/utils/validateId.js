module.exports = function validateId(id) {
    if (!id || id.trim() === "") {
      throw new Error("El ID es obligatorio y no puede estar vacío.");
    }
  };
  