const mongoose = require('mongoose'); // Import Mongoose
const Activity = require('../models/ActivitySchema'); // Import the Mongoose model

module.exports = {
  Query: {
    listActivities: async () => {
      try {
        const activities = await Activity.find(); // Fetch all activities
        return activities;
      } catch (error) {
        console.error('❌ Error fetching activities:', error.message);
        throw new Error('Failed to fetch activities from the database');
      }
    },
    getActivityById: async (_, { id }) => {
      try {
        // Validate if the provided ID is a valid ObjectId
        if (!mongoose.isValidObjectId(id)) {
          throw new Error(`Invalid ID format: ${id}`);
        }

        // Fetch activity by ID
        const activity = await Activity.findById(id);
        if (!activity) {
          throw new Error(`Activity with ID ${id} not found`);
        }

        return activity;
      } catch (error) {
        console.error(`❌ Error fetching activity by ID: ${error.message}`);
        throw new Error(error.message);
      }
    },
  },
};
