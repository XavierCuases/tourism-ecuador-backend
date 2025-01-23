const { v4: uuidv4 } = require('uuid');
const dynamoDBClient = require('../database/dynamoDBClient');
const validateActivity = require('../utils/validateActivity');

/**
 * @swagger
 * /graphql:
 *   post:
 *     summary: Execute the GraphQL mutation to create an activity
 *     tags: [GraphQL]
 *     description: Use this endpoint to send a GraphQL mutation for creating a new activity. The mutation must be sent in the `query` field of the JSON body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
 *                 type: string
 *                 description: The GraphQL mutation for creating an activity.
 *                 example: |
 *                   mutation {
 *                     createActivity(name: "Cascada de Peguche", location: "Otavalo", date: "2025-01-26") {
 *                       id
 *                       name
 *                       location
 *                       date
 *                     }
 *                   }
 *     responses:
 *       200:
 *         description: The activity was successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     createActivity:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           description: The ID of the created activity.
 *                           example: "c6211a5d-45e3-45af-8268-2f5168da38ef"
 *                         name:
 *                           type: string
 *                           description: The name of the activity.
 *                           example: Cascada de Peguche
 *                         location:
 *                           type: string
 *                           description: The location of the activity.
 *                           example: Otavalo
 *                         date:
 *                           type: string
 *                           format: date
 *                           description: The date of the activity.
 *                           example: 2025-01-26
 *       400:
 *         description: Bad request. Missing or invalid fields in the mutation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       message:
 *                         type: string
 *                         description: The error message.
 *                         example: "All fields (name, location, date) are required."
 *                       locations:
 *                         type: array
 *                         description: Where the error occurred in the GraphQL query.
 *                         items:
 *                           type: object
 *                           properties:
 *                             line:
 *                               type: integer
 *                               description: The line number of the error.
 *                             column:
 *                               type: integer
 *                               description: The column number of the error.
 */


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
