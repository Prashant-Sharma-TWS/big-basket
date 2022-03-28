const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: [true, "This email is already registered"],
        validate: {
            validator: validator.isEmail,
            message: "Please Enter Valid Email"
        }
    },
    phone: {
        type:Number,
        max: 999999999
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("user", userSchema)