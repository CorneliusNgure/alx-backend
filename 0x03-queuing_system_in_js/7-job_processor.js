import kue from 'kue';

// Create an array containing blacklisted phone numbers
const blacklistedNumbers = ['4153518780', '4153518781'];

/**
 * Function to send notification
 * @param {string} phoneNumber - The recipient's phone number
 * @param {string} message - The notification message
 * @param {Object} job - The job object
 * @param {Function} done - The callback function to indicate job completion
 */
function sendNotification(phoneNumber, message, job, done) {
  // Start tracking job progress
  job.progress(0, 100);

  // Check if the phone number is blacklisted
  if (blacklistedNumbers.includes(phoneNumber)) {
    // Fail the job if the phone number is blacklisted
    return done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  }

  // Update progress to 50%
  job.progress(50, 100);

  // Log the notification details
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);

  // Mark the job as done
  done();
}

// Create a queue with Kue
const queue = kue.createQueue();

// Process jobs from the queue 'push_notification_code_2'
queue.process('push_notification_code_2', 2, (job, done) => {
  const { phoneNumber, message } = job.data; // Destructure job data
  sendNotification(phoneNumber, message, job, done);
});
