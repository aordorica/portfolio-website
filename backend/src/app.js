const express = require('express');
const sendContactEmail = require('./emails/send')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(express.json())

// var whitelist = ["http://localhost:8000", "http://www.alanordorica.com", "https://www.alanordorica.com"];
var whitelist = ["*"];
var corsOptions = {
    origin: "https://45.79.102.240:8000",
};


app.post('/contact', cors(), (req, res) => {
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
