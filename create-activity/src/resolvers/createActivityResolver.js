const { v4: uuidv4 } = require('uuid');
const dynamoDBClient = require('../database/dynamoDBClient');
const validateActivity = require('../utils/validateActivity'); 

module.exports = {
  Mutation: {
    createActivity: async (_, { name, location, date }) => {
      validateActivity(name, location, date);

      const activity = {
        id: uuidv4(),
        name,
        location,
        date,
      };

      await dynamoDBClient.put({
        TableName: 'Activities',
        Item: activity,
      }).promise();

      return activity; 
    },
  },
};
