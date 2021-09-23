const sendGrid = require('@sendgrid/mail')
require('dotenv/config')

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
const sendContactEmail = ({email, name, message}) => {
    sendGrid
        .send({
            to: "alaniordorica@gmail.com",
            from: {
                email: "alan@alanordorica.com",
                name: name,
            },
            subject: `New web message from ${name}!`,
            text: `You got a new message from ${name}(${email}).\nThe message is:\n\t "${message}"`,
        })
        .then(() => {
            console.log("Email Sent!");
        })
        .catch((error) => {
            // Log friendly error
            console.error(error);

            if (error.response) {
                // Extract error msg
                const { message, code, response } = error;

                // Extract response msg
                const { headers, body } = response;

                console.error(body);
            }
        });
};

module.exports = sendContactEmail