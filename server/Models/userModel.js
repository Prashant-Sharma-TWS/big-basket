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
    address: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    purchases: {
        type: Array,
        default: []
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("user", userSchema)