const mongoose = require("mongoose");

const forgotSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    forgotPassToken: { type: String, required: true, unique: true }
}, { timestamps: true }); // Adding timestamps for createdAt and updatedAt

const ForgotPasModel = mongoose.model("ForgotPasswordToken", forgotSchema);

module.exports = { ForgotPasModel };
