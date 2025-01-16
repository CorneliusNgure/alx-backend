import redis from 'redis';
import { promisify } from 'util';

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

// Promisify the get method
const getAsync = promisify(client.get).bind(client);

// Function to display the value of a school from Redis using async/await
async function displaySchoolValue(schoolName) {
    try {
        const value = await getAsync(schoolName);
        console.log(`${value}`);
    } catch (err) {
        console.error('Error getting school value:', err.message);
    }
}

// Call functions
(async () => {
    await displaySchoolValue('ALX');
    setNewSchool('ALXSanFrancisco', '100');
    await displaySchoolValue('ALXSanFrancisco');
})();
