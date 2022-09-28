// Skema = Membuat skema tentang data/field
// Susunan penyimpanan database
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nama_latin: {
        type: String,
        required: true
    },
    nama_tanaman: {
        type: String,
        required: true // Harus ada, jika tidak ada harus dimasukkan ke database
    },
    gambar: {
        type: String,
        required: true // Harus ada, jika tidak ada harus dimasukkan ke database
    },
    khasiat: {
        type: String,
        required: true // Harus ada, jika tidak ada harus dimasukkan ke database
    },
    pengolahan: {
        type: String,
        required: true // Harus ada, jika tidak ada harus dimasukkan ke database
    },
    deskripsi: {
        type: String,
        required: true // Harus ada, jika tidak ada harus dimasukkan ke database
    },
    validate: {
        type: Boolean,
        default: false
    }
});

// Mengekspor module
// 
module.exports = mongoose.model('TanamanModel', schema);