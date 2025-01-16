import redis from 'redis';

// Create the Redis client
const client = redis.createClient();

// Event listener for successful connection
client.on('connect', () => {
    console.log('Redis client connected to the server');
});

// Event listener for connection errors
client.on('error', (err) => {
    console.error('Redis client not connected to the server:', err.message);
});

// Function to publish a message with a delay
function publishMessage(message, time) {
    setTimeout(() => {
        console.log(`About to send: ${message}`);
        client.publish('ALXchannel', message);
    }, time);
}

// Call the publishMessage function with different messages and delays
publishMessage('ALX Student #1 starts course', 100);
publishMessage('ALX Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('ALX Student #3 starts course', 400);
