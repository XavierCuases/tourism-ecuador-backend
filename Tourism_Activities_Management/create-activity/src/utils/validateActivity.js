module.exports = function validateActivity(name, location, date, price, description) {
  let missingFields = [];

  // Check required fields
  if (!name) missingFields.push("name");
  if (!location) missingFields.push("location");
  if (!date) missingFields.push("date");
  if (!description) missingFields.push("description");

  // If required fields are missing, throw an error listing them
  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
  }

  // Validate price (optional, but must be a positive number if provided)
  if (price !== undefined && (typeof price !== "number" || price < 0)) {
    throw new Error("Price must be a positive number.");
  }
};
