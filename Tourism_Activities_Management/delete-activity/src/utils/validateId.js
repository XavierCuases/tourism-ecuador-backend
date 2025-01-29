module.exports = function validateId(id) {
    if (!id || id.trim() === "") {
      throw new Error("The ID is required and cannot be empty.");
    }
  };
  