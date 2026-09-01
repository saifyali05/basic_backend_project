const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    category: {
        type: String,
        required: true
    },

    stock: {
        type: Number,
        required: true,
        min: 0
    },

    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;