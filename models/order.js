const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  ingredients: {
    salad: Number,
    bacon: Number,
    cheese: Number,
    meat: Number
  },
  price: Number,
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  orderData: {
    name: String,
    street: String,
    zipCode: String,
    country: String,
    email: String,
    deliveryMethod: {type: String, enum: ['fastest', 'cheapest']}
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);

/*{
  ingredients: { salad: 1, bacon: 1, cheese: 1, meat: 1 },
  price: 6.9,
  orderData: {
    name: 'Juan José Martínez',
    street: 'Plaza Falguera 3, 6º 1º',
    zipCode: '08980',
    country: 'España',
    email: 'juanjo@juanjo.com',
    deliveryMethod: 'fastest'
  },
  userId: '5f43f065421baa01cba043db'
}*/
