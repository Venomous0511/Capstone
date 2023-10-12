const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://Venomous:dj0tQFcISI1z8ENC@reservation.enj4dcj.mongodb.net/Reservation");

const reservationSchema = {
    name: String,
    email: String,
    address: String,
    date: Date,
    cottage: String,
    kids: String,
    adults: String
}

const reserve = mongoose.model("DayReservation", reservationSchema);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/services.html");
})

app.post("/", async function (req, res) {
    try {
        let newreserve = new reserve({
            nameday: req.body.name,
            emailday: req.body.emailday,
            addressday: req.body.addressday,
            dateday: req.body.dateday,
            cottages: req.body.cottages,
            kidsday: req.body.kidsday,
            adultsday: req.body.adultsday
        });

        await newreserve.save();
        res.status(200).send("Data saved successfully");
    } catch (error) {
        res.status(500).send("Error saving data: " + error.message);
    }
})

app.listen(3000, function () {
    console.log("server is running on 3000");
})