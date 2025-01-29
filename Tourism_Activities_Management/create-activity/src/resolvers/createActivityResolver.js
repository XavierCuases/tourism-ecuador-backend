const Activity = require('../models/ActivitySchema');
const validateActivity = require('../utils/validateActivity');

module.exports = {
  Mutation: {
    createActivity: async (_, { name, location, date, description, photos, price }) => {
      try {
        // Validate input fields (ensures required fields are present)
        validateActivity(name, location, date, price);

        // Create a new activity document
        const activity = new Activity({
          name,
          location,
          date,
          description, // Optional
          photos, // Optional
          price, // Optional but validated
        });

        // Save the activity to MongoDB
        const savedActivity = await activity.save();

        // Return the saved activity
        return savedActivity;
      } catch (error) {
        console.error('❌ Validation or creation error:', error.message);
        throw new Error(error.message);
      }
    },
  },
};