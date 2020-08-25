const getIngredients = (req, res) => {
  ingredients = {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  }

  res.send(ingredients);
};

module.exports = {
  getIngredients
};
