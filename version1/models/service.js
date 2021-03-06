var mongoose = require("mongoose");
var ServiceProvider = require("./serviceProvider");

var serviceSchema = new mongoose.Schema({
    type : String,
    appliance : String,
    description : String,
    price :Number,
    provider : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "serviceProvider",
        }
    ],
});

module.exports = mongoose.model("Service", serviceSchema);