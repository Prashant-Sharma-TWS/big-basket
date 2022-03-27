const mongoose = require("mongoose")


const CartSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        subTotal: {
            default: 0,
            type: Number,
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("cart", CartSchema);

