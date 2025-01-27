module.exports = function validateUpdateFields(name, location, date) {
    if (!name && !location && !date) {
        throw new Error('Debe proporcionarse al menos un campo para actualizar (name, location, date).');
    }
};
