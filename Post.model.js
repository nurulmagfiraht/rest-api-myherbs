// Skema = Membuat skema tentang data/field
// Susunan penyimpanan database
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true // Harus ada, jika tidak ada harus dimasukkan ke database
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

// Mengekspor module
// 
module.exports = mongoose.model('Post', schema);