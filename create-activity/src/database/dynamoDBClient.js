const dynamoDB = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1', // Región especificada
    endpoint: 'http://localhost:8000', // Endpoint local
  });
  