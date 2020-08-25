const jwt = require('jsonwebtoken');
const Order = require('../../models/order');

const listOrders = async (req, res) => {
  try{
    const decodedToken = jwt.verify(req.query.token, process.env.JWT_SECRET);
    const orders = await Order.find({userId: decodedToken.userId});
    res.send(orders);
  }catch(err){
    console.log(err);
    res.status(500).send({error: err.message});
  }
}

const saveOrder = (req, res) => {
  const order = new Order(req.body);
  order.save()
    .then((savedOrder) => {
      res.send({saved: savedOrder});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({errror: err.message});
    });
};

module.exports = {
  saveOrder,
  listOrders
};
