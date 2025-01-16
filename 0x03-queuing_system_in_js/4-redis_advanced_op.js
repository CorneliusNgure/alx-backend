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

// Function to create a hash in Redis
function createHash() {
    client.del('ALX', (err, reply) => {
        if (err) {
            console.error('Error deleting key:', err.message);
        } else {
            console.log(`Deleted existing key: ${reply}`);
            client.hset('ALX', 'Portland', '50', redis.print);
            client.hset('ALX', 'Seattle', '80', redis.print);
            client.hset('ALX', 'New York', '20', redis.print);
            client.hset('ALX', 'Bogota', '20', redis.print);
            client.hset('ALX', 'Cali', '40', redis.print);
            client.hset('ALX', 'Paris', '2', redis.print);
            // Call displayHash here directly after the hash is created
            displayHash();
        }
    });
}

// Function to display a hash from Redis
function displayHash() {
    client.hgetall('ALX', (err, obj) => {
        if (err) {
            console.error('Error getting hash:', err.message);
        } else {
            console.log('Hash contents:', obj);
        }
    });
}

// Call the createHash function
createHash();
