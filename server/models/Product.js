const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ],
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
