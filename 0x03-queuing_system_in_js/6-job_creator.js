import kue from 'kue';

// Create a queue
const queue = kue.createQueue();

// Job data object
const jobData = {
    phoneNumber: '123-456-7890',
    message: 'This is a notification message',
};

// Create a job in the push_notification_code queue
const job = queue.create('push_notification_code', jobData)
    .save((err) => {
        if (err) {
            console.error('Failed to create notification job:', err.message);
        } else {
            console.log(`Notification job created: ${job.id}`);
        }
    });

// Event listener for job completion
job.on('complete', () => {
    console.log('Notification job completed');
});

// Event listener for job failure
job.on('failed', () => {
    console.log('Notification job failed');
});
