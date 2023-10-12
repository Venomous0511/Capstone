const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 5500; // Set your desired port number
const uri = "mongodb+srv://Venomous:dj0tQFcISI1z8ENC@reservation.enj4dcj.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', async (req, res) => {
    res.sendFile(__dirname + 'services.html');

    try {
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        await client.connect();

        const dataschema = new Schema({
            name: String,
            email: String,
            address: String,
            date: Date,
            cottage: String,
            kids: int,
            adults: int
        })

        const Data = mongoose.model('Data', dataSchema);

        const reservationData = {
            name: req.body['name-day'],
            email: req.body['email-day'],
            address: req.body['address-day'],
            date: req.body['date-day'],
            cottage: req.body['cottage'],
            kids: req.body['kids-day'],
            adults: req.body['adults-day']
        };

        const database = client.db('Reservation'); // Replace 'your-database-name' with your actual database name
        const collection = database.collection('DayReservation'); // Replace 'reservations' with your desired collection name

        await collection.insertOne(reservationData);
        console.log('Reservation data inserted into the database.');

        res.send('Reservation successful!'); // Send a response to the client
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
