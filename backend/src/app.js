const express = require('express');
const sendContactEmail = require('./emails/send')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

const pubURL = "https://www.alanordorica.com";

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", pubURL);
    res.setHeader("Access-Control-Allow-Methods", 'POST');
    res.setHeader("Access-Control-Allow-Headers", 'Content-Type');
    return next();
})

const corsCheck = (req, res, next) => {
    if(req.header.origin === pubURL) {
        console.log('Origin secured!')
        return next()
    } else {
        console.log('Invalid origin!')
        res.status(401).send({
            error: 'Invalid origin!'
        })
    }
}


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
