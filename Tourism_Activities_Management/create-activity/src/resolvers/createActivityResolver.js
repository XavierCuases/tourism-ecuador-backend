const Activity = require('../models/ActivitySchema');
const validateActivity = require('../utils/validateActivity');

module.exports = {
  Mutation: {
    createActivity: async (_, { name, location, date, description, photos, price }) => {
      try {
       
        validateActivity(name, location, date, price);

  
        const activity = new Activity({
          name,
          location,
          date,
          description: description || "", 
          photos: photos || [], 
          price: price || 0
        });

        const savedActivity = await activity.save();
        return savedActivity;
      } catch (error) {
        console.error('❌ Validation or creation error:', error.message);
        throw new Error(error.message);
      }
    },
  },
};
