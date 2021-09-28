const express = require('express');
const sendContactEmail = require('./emails/send')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000
const path = require('path')


// const root = path.join(__dirname, '../../frontend/public')
// app.use(express.static(root))
app.use(express.json())

var whitelist = ["http://localhost:8000", "http://www.alanordorica.com:8000", "https://www.alanordorica.com:8000"];
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["POST"]
};

// app.use('/*', (req, res) => {
//     res.sendFile(path.join(root, 'index.html'))
// })

app.use(cors(corsOptions))

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
