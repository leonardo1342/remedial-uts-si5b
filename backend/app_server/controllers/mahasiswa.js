const mongoose = require ("mongoose");
const Mahasiswa = mongoose.model("Mahasiswa");

const index = (req,res,next) => {
    Mahasiswa.find({}, {__v: 0})
    .then((mahasiswas) => {
        const responseMessage = {
            code: 200,
            message: "Berhasil Mendapatkan Data",
            data: mahasiswas
        };
        res.status(200).json(responseMessage);
    })
    
    .catch((e) => {
        const responseMessage = {
            code: 400,
            message: "Gagal Mendapatkan Data"
        };
        res.status(400).json(responseMessage);
    })
};
const insert = (req, res, next) => {
    let mhssiswa = req.body;
    let mahasiswa = new Mahasiswa(mhssiswa);
  
    mahasiswa
      .save()
      .then((result) => {
        const responseMessage = {
          code: 200,
          message: "Berhasil Mendapatkan Data",
          data: result,
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
          code: 400,
          message: "Gagal Mendapatkan Data",
          error: e.message,
        };
        res.status(400).json(responseMessage);
      });
  };
  

module.exports = {
    index, insert
}