const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe") ("sk_test_51OkPkWSJLkssVyf9PXrzDZqYGi0oLNI9FkQFe96TChLXftyTw89wmbZCbRF5PLT9MP7eBmaLkNMpTbgD6F8cYuKn00boxsgjnc");

// API

// API Config
const app = express();


// MiddleWares
app.use(cors({ origin: true}));
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    console.log("Payment request received");

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // submits of the currency
        currency: "usd",
    });

    // ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// Listen Command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://127.0.0.1:5001/clone-3047d/us-central1/api



