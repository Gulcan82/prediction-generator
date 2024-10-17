const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const tableName = process.env.DYNAMODB_TABLE;
    const predictionId = event.pathParameters?.predictionId; // Optional chaining

    console.log("Received event:", JSON.stringify(event, null, 2));

    // Validierung des predictionId
    if (!predictionId) {
        console.warn("Validation failed: 'predictionId' is missing.");
        return {
            statusCode: 400,
            headers: getCorsHeaders(),
            body: JSON.stringify({ message: "'predictionId' is required" })
        };
    }

    console.log(`Deleting prediction with ID: ${predictionId} from table: ${tableName}`);

    const params = {
        TableName: tableName,
        Key: {
            predictionId
        }
    };

    try {
        console.log("Initiating delete operation for predictionId:", predictionId);
        await dynamodb.delete(params).promise();
        console.log(`Prediction with ID: ${predictionId} deleted successfully`);

        return {
            statusCode: 200,
            headers: getCorsHeaders(),
            body: JSON.stringify({ message: "Prediction deleted successfully", predictionId })
        };
    } catch (error) {
        console.error("Error deleting prediction with ID:", predictionId, "Error:", error);

        return {
            statusCode: 500,
            headers: getCorsHeaders(),
            body: JSON.stringify({ message: "Error deleting prediction", error: error.message })
        };
    }
};

// Funktion zur Rückgabe von CORS-Headern
const getCorsHeaders = () => ({
    "Access-Control-Allow-Origin": "*",  // Allow all origins or specify your frontend origin
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE"
});
