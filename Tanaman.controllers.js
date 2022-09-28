// Mengambil data dari file post model
const TanamanModel = require('../models/Tanaman.model');

// Function untuk menyimpan data POST
// 2 Parameter : Request dan Response
// Terdapat variable post, objek Post dari model Post
// Dalam objek post terdapat title dan desc sesuai dgn model yg telah dibuat
// req.body.title = Menerima request dari body yang bernama title
// Body berbentuk json
// Kemudian disimpan dalam savedUser
// Menyimpan ke database : post.save()
// res.json
async function post(req, res) {
    const { nama_latin, nama_tanaman, gambar, khasiat, pengolahan, deskripsi, validate } = req.body;
    console.log({nama_latin, nama_tanaman, gambar, khasiat, pengolahan, deskripsi, validate});
    const post = new TanamanModel({
        nama_latin, nama_tanaman, gambar, khasiat, pengolahan, deskripsi, validate
    });
    try {
        const savedTanamanModel = await post.save();
        res.json(savedTanamanModel);
    } catch (error) {
        res.json(error);
    }
}

module.exports = post;