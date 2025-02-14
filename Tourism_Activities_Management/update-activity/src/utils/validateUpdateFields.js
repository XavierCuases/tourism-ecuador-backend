module.exports = function validateUpdateFields(name, location, date, description, photos, price) {
    if (!name && !location && !date && !description && !photos && !price) {
      throw new Error(
        'At least one field must be provided to update (name, location, date, description, photos, price).'
      );
    }
  
    if (photos) {
      if (!Array.isArray(photos)) {
        throw new Error('Photos must be an array of strings (URLs).');
      }
  
      const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      for (const photo of photos) {
        if (typeof photo !== 'string' || !urlRegex.test(photo)) {
          throw new Error(`Invalid URL detected in photos: ${photo}`);
        }
      }
    }
  
    if (price !== undefined && typeof price !== 'number') {
      throw new Error('Price must be a valid number.');
    }
    if (price < 0) {
      throw new Error('Price cannot be negative.');
    }
  };
  