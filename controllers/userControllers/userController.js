const userService = require('../../services/userServices/userService');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    const {  name, email, lockout_time,role, departement_id, password, app_name, role_id  } = req.body;
    
    let user = await userService.createUser({  name, email, lockout_time,role, departement_id, password, app_name, role_id});
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id, name, email ,role, departement_id, app_name} = req.body;
    
    let user = await userService.updateUser( {id, name, email, role, departement_id, app_name} );
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.loginUser(email, password);
    res.json({ message: 'Login successful', user });
  } catch (error) {
    res.status(401).send(error.message);
  }
};

exports.getUserByToken = async (req, res) => {
  try {
    const { api_token } = req.body;
    console.log(`Get user by token request received controller: ${api_token}`);
    const user = await userService.getUserByToken(api_token);
    if (!user) {
      console.log(`User not found for token controller: ${api_token}`);
      return res.status(404).send('User not found');
    }
    console.log(`User found for token: ${api_token}`);
    res.json({ user });
  } catch (error) {
    console.error(`Get user by token error controller: ${error.message}`);
    res.status(500).send(error.message);
  }
};

exports.logoutUser = async (req, res) => {
  try {
    
    let id = req.params.id;

  await userService.logoutUser(id);

  res.sendStatus(200);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

