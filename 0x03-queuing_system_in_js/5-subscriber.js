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

// Subscribe to the channel ALXchannel
client.subscribe('ALXchannel');

// Handle messages from the channel
client.on('message', (channel, message) => {
    console.log(`Received message: ${message} on channel ${channel}`);

    if (message === 'KILL_SERVER') {
        console.log('Received KILL_SERVER. Unsubscribing and quitting...');
        client.unsubscribe();
        client.quit();
    }
});
