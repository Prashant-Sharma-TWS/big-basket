const mongoose = require("mongoose");


const itemSchema = mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, "Quantity can not be less then 1."],
        },
        cart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "cart"
        }


    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("item", itemSchema);



