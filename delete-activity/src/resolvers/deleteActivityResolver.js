const dynamoDBClient = require('../database/dynamoDBClient');
const validateId = require('../utils/validateId'); 

module.exports = {
  Mutation: {
    deleteActivity: async (_, { id }) => {
  
      validateId(id);

      const getParams = {
        TableName: 'Activities',
        Key: { id },
      };

      const existingItem = await dynamoDBClient.get(getParams).promise();
      if (!existingItem.Item) {
        throw new Error(`No activity found with ID: ${id}`);
      }

      const deleteParams = {
        TableName: 'Activities',
        Key: { id },
      };

      await dynamoDBClient.delete(deleteParams).promise();
      return `Activity with ID: ${id} was successfully deleted.`;
    },
  },
};
