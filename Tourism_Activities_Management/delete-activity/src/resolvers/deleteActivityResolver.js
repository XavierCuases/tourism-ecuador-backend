const Activity = require('../models/ActivitySchema'); 
const validateID = require('../utils/validateIde'); 

module.exports = {
  Mutation: {
    deleteActivity: async (_, { id }) => {
      try {
        
        validateID(id);

        const activity = await Activity.findById(id);
        if (!activity) {
          throw new Error(`No activity found with ID: ${id}`);
        }

        const deletedActivity = await Activity.findByIdAndDelete(id);

        return deletedActivity; 
      } catch (error) {
        console.error(`Error deleting activity: ${error.message}`);
        throw new Error(error.message); 
      }
    },
  },
};
