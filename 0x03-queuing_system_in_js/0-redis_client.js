// Import the Redis library
import { createClient } from 'redis';

// Create a Redis client
const client = createClient();

// Event listener for successful connection
client.on('connect', () => {
    console.log('Redis client connected to the server');
});

// Event listener for connection errors
client.on('error', (err) => {
    console.error('Redis client not connected to the server:', err.message);
});

// Connect to the Redis server
(async () => {
    try {
        await client.connect();
    } catch (err) {
        console.error('Redis connection failed:', err.message);
    }
})();

