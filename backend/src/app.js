const express = require('express');
const sendContactEmail = require('./emails/send')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(express.json())

// var whitelist = ["http://localhost:8000", "http://www.alanordorica.com", "https://www.alanordorica.com"];
var whitelist = ["*"];
var corsOptions = {
    origin: "http://www.alanordorica.com/contact",
};

app.use(cors())

app.post('/contact', (req, res) => {
    console.log('Gotten into the POST section');
    const emailData = { ...req.body }
    try {
        sendContactEmail({ ...req.body });
        console.log(emailData);
        res.status(200).send({ message: "Message Sent! Thank you!" });
    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log(`Node App is running on port: ${port}`);
})
