const AWS = require('aws-sdk'); // Importa aws-sdk

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000', // Endpoint local para DynamoDB Local
});

module.exports = dynamoDB;
