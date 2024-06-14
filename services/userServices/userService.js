const userDao = require('../../dao/userDao/userDao');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UserService {
  async getAllUsers() {
    return await userDao.findAllUsers();
  }

  async createUser(user) {
    
    return await userDao.createUser(user);
  }

  async updateUser(user) {
    console.log(user)
    return await userDao.updateUser(user);
  }


  async loginUser(email, password) {
    const user = await userDao.findByUseremail(email);
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    const accessToken = jwt.sign({ login: user.email }, process.env.SECRET_KEY);
    await userDao.updateApiToken(user.id, accessToken);
    return { ...user, api_token: accessToken };
  }

  async getUserByToken(api_token) {
    console.log(`Fetching user by token service: ${api_token}`);
    return await userDao.findUserByToken(api_token);
  }

  async logoutUser (id) {
    return await userDao.updateApiToken(id, "");
  
  }
}



module.exports = new UserService();