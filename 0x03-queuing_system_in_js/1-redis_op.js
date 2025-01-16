// Import the Redis library
import redis from 'redis';

// Create a Redis client
const client = redis.createClient();

// Event listener for successful connection
client.on('connect', () => {
    console.log('Redis client connected to the server');
});

// Event listener for connection errors
client.on('error', (err) => {
    console.error('Redis client not connected to the server:', err.message);
});

// Function to set a new school value in Redis
function setNewSchool(schoolName, value) {
    client.set(schoolName, value, redis.print); // Use redis.print for confirmation
}

// Function to display the value of a school from Redis
function displaySchoolValue(schoolName) {
    client.get(schoolName, (err, value) => {
        if (err) {
            console.error('Error getting school value:', err.message);
        } else {
            console.log(`${value}`);
        }
    });
}

// Call functions
displaySchoolValue('ALX');
setNewSchool('ALXSanFrancisco', '100');
displaySchoolValue('ALXSanFrancisco');
