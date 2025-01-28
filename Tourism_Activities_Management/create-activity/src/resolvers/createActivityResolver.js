const Activity = require('../models/ActivitySchema');
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
 *                       _id
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
 *                         _id:
 *                           type: string
 *                           description: The ID of the created activity.
 *                           example: "64c12345abcde1234567890f"
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
 */

module.exports = {
  Mutation: {
    createActivity: async (_, { name, location, date }) => {
      // Validate input fields
      validateActivity(name, location, date);

      try {
        // Log the incoming data for debugging purposes
        console.log('Creating activity:', { name, location, date });

        // Create and save the activity document
        const activity = new Activity({ name, location, date });
        const savedActivity = await activity.save();

        console.log('Activity successfully saved:', savedActivity);

        // Return the saved activity
        return savedActivity;
      } catch (error) {
        console.error('Error saving activity:', error.message);
        throw new Error('Failed to save activity to the database.');
      }
    },
  },
};
