const dynamoDBClient = require('../database/dynamoDBClient');

module.exports = {
  Query: {
    
    listActivities: async () => {
      const params = {
        TableName: 'Activities',
      };

      const result = await dynamoDBClient.scan(params).promise();
      return result.Items.map((item) => ({
        id: item.id,
        name: item.name,
        location: item.location,
        date: item.date,
      }));
    },

    
    getActivityById: async (_, { id }) => {
      const params = {
        TableName: 'Activities',
        Key: {
          id, 
        },
      };

      const result = await dynamoDBClient.get(params).promise();
      if (!result.Item) {
        throw new Error(`No activity found with ID: ${id}`);
      }

      return {
        id: result.Item.id,
        name: result.Item.name,
        location: result.Item.location,
        date: result.Item.date,
      };
    },
  },
};
