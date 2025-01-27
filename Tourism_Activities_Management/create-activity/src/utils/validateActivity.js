module.exports = function validateActivity(name, location, date) {
    if (!name || !location || !date) {
      throw new Error('All fields (name, location, date) are required.');
    }
  };
  