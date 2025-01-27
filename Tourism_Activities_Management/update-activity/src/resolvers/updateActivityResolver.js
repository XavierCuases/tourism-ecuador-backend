const dynamoDBClient = require('../database/dynamoDBClient');
const validateUpdateFields = require('../utils/validateUpdateFields'); 
module.exports = {
  Mutation: {
    updateActivity: async (_, { id, name, location, date }) => {
     
      validateUpdateFields(name, location, date);

      const getParams = {
        TableName: 'Activities',
        Key: { id },
      };

      const existingItem = await dynamoDBClient.get(getParams).promise();
      if (!existingItem.Item) {
        throw new Error(`No activity found with ID: ${id}`); 
      }

    
      const updateParams = {
        TableName: 'Activities',
        Key: { id },
        UpdateExpression: `
          SET ${name ? '#n = :name,' : ''}
              ${location ? '#l = :location,' : ''}
              ${date ? '#d = :date,' : ''}
          `.replace(/,\s*$/, ''),
        ExpressionAttributeNames: {
          ...(name && { '#n': 'name' }),
          ...(location && { '#l': 'location' }),
          ...(date && { '#d': 'date' }),
        },
        ExpressionAttributeValues: {
          ...(name && { ':name': name }),
          ...(location && { ':location': location }),
          ...(date && { ':date': date }),
        },
        ReturnValues: 'ALL_NEW',
      };

      const result = await dynamoDBClient.update(updateParams).promise();
      return result.Attributes; 
    },
  },
};
