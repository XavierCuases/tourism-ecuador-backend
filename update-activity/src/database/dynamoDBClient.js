const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-1', 
  endpoint: 'http://localhost:8000',
});

module.exports = dynamoDB;
