const express = require('express');
const sendContactEmail = require('./emails/send')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(express.json())
app.use(allowCrossDomain)
app.use(cors())

const pubURL = "https://www.alanordorica.com";

const allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", pubURL);
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
};

const corsCheck = (req, res, next) => {
    if(req.header.origin === pubURL) {
        next()
    } else {
        res.status(401)
    }
}


app.post('/contact', corsCheck(), (req, res) => {
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
