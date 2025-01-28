const Activity = require('../models/ActivitySchema');
const validateActivity = require('../utils/validateActivity');

/**
 * @swagger
 * /graphql:
 *   post:
 *     summary: Create a new activity using GraphQL
 *     tags: [Activities]
 *     description: |
 *       This endpoint allows you to create a new activity by sending a GraphQL mutation.
 *       The request must contain a valid mutation inside the `query` field of the JSON body.
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
 *                     createActivity(
 *                       name: "Cascada de Peguche"
 *                       location: "Otavalo"
 *                       date: "2025-01-26"
 *                       description: "A beautiful waterfall in Otavalo."
 *                       photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]
 *                       price: 25.50
 *                     ) {
 *                       _id
 *                       name
 *                       location
 *                       date
 *                       description
 *                       photos
 *                       price
 *                     }
 *                   }
 *     responses:
 *       200:
 *         description: Activity created successfully.
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
 *                           description: Unique identifier for the activity.
 *                           example: "64c12345abcde1234567890f"
 *                         name:
 *                           type: string
 *                           description: Name of the activity.
 *                           example: "Cascada de Peguche"
 *                         location:
 *                           type: string
 *                           description: Location of the activity.
 *                           example: "Otavalo"
 *                         date:
 *                           type: string
 *                           format: date
 *                           description: Date when the activity takes place.
 *                           example: "2025-01-26"
 *                         description:
 *                           type: string
 *                           description: Short description of the activity.
 *                           example: "A beautiful waterfall in Otavalo."
 *                         photos:
 *                           type: array
 *                           items:
 *                             type: string
 *                             format: uri
 *                           description: List of image URLs representing the activity.
 *                           example: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]
 *                         price:
 *                           type: number
 *                           description: Cost of the activity.
 *                           example: 25.50
 *       400:
 *         description: Bad request. Some fields are missing or contain invalid values.
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
 *                         description: Error message.
 *                         example: "Missing required fields: name, location, date"
 */



module.exports = {
  Mutation: {
    createActivity: async (_, { name, location, date, description, photos, price }) => {
      try {
        // Validate input fields (ensures required fields are present)
        validateActivity(name, location, date, price);

        // Create a new activity document
        const activity = new Activity({
          name,
          location,
          date,
          description, // Optional
          photos, // Optional
          price, // Optional but validated
        });

        // Save the activity to MongoDB
        const savedActivity = await activity.save();

        // Return the saved activity
        return savedActivity;
      } catch (error) {
        console.error('❌ Validation or creation error:', error.message);
        throw new Error(error.message);
      }
    },
  },
};