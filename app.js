const mongoose = require('mongoose');
const express = require('express'); //require = Memanggil package bernama express yang telah terinstall
const apiRoute = require('./routes/api.route');
const app = express(); //Memanggil function express
require('dotenv/config');

app.use(express.json());
app.use('/api', apiRoute);

// route

// Membuat sebuah rute 
// Terdapat callback dgn 2 parameter : Request, Response
app.get('/', (request, response) => {
    response.send("Hai Dunia");
})

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("db terhubung");
})

// Method membuat web server
// 3000 = Port
app.listen(3000, () => {
    console.log("Sudah Terhubung");
});