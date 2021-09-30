const express = require("express");
const sendContactEmail = require("./emails/send");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
    res.send({
        title: "GET /api",
        name: "Alan Ordorica",
    });
});

app.post('/api', (req, res) => {
    console.log('Gotten into the POST section');
    const emailData = { ...req.body }
    try {
        sendContactEmail({ ...req.body });
        console.log(emailData);
        res.status(200).send({ message: "Message Sent! Thank you!" });
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`Node App is running on port: ${port}`);
});
