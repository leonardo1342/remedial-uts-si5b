let mongoose = require("mongoose");

//https://mongoosejs.com/docs/schematypes.html
//create Schema
let schemaMahasiswa = new mongoose.Schema({
    nama : {
        type : String,
        require: true
    },
    usia : {
        type : Number,
        require: false
    },
    npm : {
        type : String,
        require: false
    },
    jurusan : {
        type : String,
        require: true
    },
    hobi : {
        type : [String],
        require: false
    },
    motivasi : {
        type : String,
        require: false
    },
    gambar : {
        type : String,
        require: false
    },
    

})

//create Model from Schema
mongoose.model('Mahasiswa', schemaMahasiswa);