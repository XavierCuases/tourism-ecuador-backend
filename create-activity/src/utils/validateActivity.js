module.exports = function validateActivity(name, location, date) {
    if (!name || !location || !date) {
      throw new Error('Todos los campos (name, location, date) son obligatorios.');
    }
  };
  