const accountSid = 'AC525a74f9e5907b29b47c9be3170f18ed';
const authToken = '04681f136f96f1da4bb29a848481b836';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        to: '+919301742169',
        from:  '+19802951157', // Replace with your Twilio phone number or alphanumeric sender ID
        body: 'This is a test message from Twilio!' // Replace with your desired message content
    })
    .then(message => console.log(message.sid))
    .catch(error => console.error(error));
