var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../../models/user');

const signUp = async (req, res) => {
  try{
    const user = new User({
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10)
    });

    user.save()
      .then((savedUser) => {
        res.send(createUserResponse(savedUser.email, savedUser.id));
      })
      .catch((err) => {
        console.log('Error saving user - ', err);
      });
  }catch(err){
    console.log(err);
    res.status(500).send({error: err.message});
  }
};

const signIn = async (req, res) => {
  try{
    const user = await User.findOne({ email: req.body.email });
    if(user === null){
      if(user === null) res.send({error: 'User not found'});
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(validPassword){
      res.send(createUserResponse(user.email, user.id));
    }else{
      res.send({error: 'Not valid password'});
    }
  }catch(err){
    console.log(err);
    res.status(500).send({error: err.message});
  }
}

function createUserResponse(email, userId) {
  const tokenPayload = {
    email: email,
    userId: userId
  }

  var token = jwt.sign(tokenPayload, process.env.JWT_SECRET);

  const responseData = {
    token: token,
    userId: userId,
    expiresIn: 3600
  }

  return responseData;
}

module.exports = {
  signUp,
  signIn
};
