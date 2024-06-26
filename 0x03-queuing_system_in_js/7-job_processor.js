const kue = require('kue');
const queue = kue.createQueue();
const blackListedNumbers = ['4153518780', '4153518781'];

const sendNotification = (phoneNumber, message, job, done) => {
    job.progress(0, 100);
    if (blackListedNumbers.includes(phoneNumber)) {
            return done(new Error(`Phone number ${phoneNumber} is blacklisted`));
    } else {
            console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
            job.progress(50, 100)
            done();
        }
    };
queue.process('push_notification_code_2', 2, (job, done) => {
    const { phoneNumber, message } = job.data;
    sendNotification(phoneNumber, message, job, done);

});
