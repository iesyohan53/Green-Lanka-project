const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: [true, 'Please enter product name'],
    trim: true,
    maxLength: [100, 'Product name cannot exceed 100 characters'],
  },
  product_Id: {
    type: String,
    required: [true, 'Please enter product ID'],
    trim: true,
    maxLength: [20, 'Product ID cannot exceed 20 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter product price'],
    trim: true,
    maxLength: [5, 'Price cannot exceed 5 digits'],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, 'Please enter product description'],
  },
  availability: {
    type: String,
    required: [true, 'Please specify availability (Yes/No)'],
    enum: {
      values: ['Yes', 'No'],
      message: 'Please select correct availability',
    },
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Please select category for this product'],
    enum: {
      values: ['Kithul_Products', 'Kithul_Sweets', 'Special_Kithul_Sweets'],
      message: 'Please select correct category for product',
    },
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);
