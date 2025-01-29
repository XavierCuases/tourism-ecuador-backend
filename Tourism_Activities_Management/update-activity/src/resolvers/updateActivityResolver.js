const Activity = require('../models/ActivitySchema'); 
const validateUpdateFields = require('../utils/validateUpdateFields'); 
module.exports = {
  Mutation: {
    updateActivity: async (_, { id, name, location, date, description, photos, price }) => {
      
      validateUpdateFields(name, location, date, description, photos, price);

      
      if (!id) {
        throw new Error('A valid ID is required to update an activity.');
      }

      const existingActivity = await Activity.findById(id);
      if (!existingActivity) {
        throw new Error(`No activity found with ID: ${id}`);
      }

      const updateFields = {};
      if (name) updateFields.name = name;
      if (location) updateFields.location = location;
      if (date) updateFields.date = date;
      if (description) updateFields.description = description;
      if (photos) updateFields.photos = photos;
      if (price) updateFields.price = price;

     
      const updatedActivity = await Activity.findByIdAndUpdate(id, updateFields, {
        new: true, 
        runValidators: true, 
      });

      return updatedActivity; 
    },
  },
};
