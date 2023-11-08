let mongoose = require("mongoose");

let dBURI = "mongodb://127.0.0.1:27017/remedial_si5b";

mongoose.connect(dBURI, {
    useNewUrlParser: true
});
mongoose.connection.on("error", () => {
    console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (error) => {
    console.log("Connection Error : " + error);
});
mongoose.connection.on("Disconnected", () => {
    console.log("Disconnected from MongoDB");
});

require("./mahasiswa");