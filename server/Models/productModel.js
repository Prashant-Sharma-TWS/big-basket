const mongoose = require("mongoose");


const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String,
            trim: true,
            required: true
        },
        price: {
            type: Number,
            required: true,
            maxlength: 32,
            trim: true
        },
        mrp: {
            type: Number,
            required: true,
            maxlength: 32,
            trim: true
        },
        discount: {
            type: Number,
            required: true,
            maxlength: 32,
            trim: true
        },
        category: {
            type: String,
            required: true
        },
        stock: {
            type: Number,
            required: true,
            trim: true
        },
        brand: {
            type: String,
            required: true,
            trim: true
        },
        photo: {
            type: String
        },
        superSaver: {
            type: Boolean,
            default: false
        },
        quantityType: {
            type: String,
            required: true
        },
        season: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("product", productSchema);