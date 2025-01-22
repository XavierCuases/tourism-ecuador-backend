const { v4: uuidv4 } = require('uuid');
const dynamoDBClient = require('../database/dynamoDBClient');

module.exports = {
  Mutation: {
    createActivity: async (_, { name, location, date }) => {
      const activity = { id: uuidv4(), name, location, date };
      await dynamoDBClient.put({
        TableName: 'Activities',
        Item: activity,
      }).promise();
      return activity;
    },
  },
};
