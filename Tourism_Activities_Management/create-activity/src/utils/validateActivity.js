module.exports = function validateActivity(name, location, date, price) {
  if (!name || !location || !date) {
    throw new Error("Missing required fields: name, location, date");
  }

  if (price !== undefined && (typeof price !== 'number' || price < 0)) {
    throw new Error("Price must be a valid number and cannot be negative.");
  }
};
