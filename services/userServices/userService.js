const userDao =require("../../dao/userDao/userDao");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require("fs");


const createUser = async (userData, documents) => {
  console.log(userData);
  console.log(documents);
  let saveResult = await saveDocumentsToServer(documents);
  console.log(saveResult);
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  return await userDao.createUser({
    ...userData,
    password: hashedPassword,
  });
};

async function saveDocumentsToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    console.log(file);
    await saveFile(file.base64String, file.name, file.path);
    counter++;
    console.log("File number " + counter + " saved");
  }
  if (counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path) {
  //const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, '');
  const binaryData = Buffer.from(base64String, "base64");
  const filePath = file_path + fileName;
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}


// login service acccount
const loginUser = async (login, password) => {
  const user = await userDao.findUserByLogin(login);

  if (!user) {
    throw new Error("user not found");
  }

  if (await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign({ login: user.login }, "yourSecretKey");
    console.log(typeof accessToken);
    await userDao.updateJwtToken(user._id, String(accessToken));
    let updatedUser = await userDao.getUserById(user._id);
    return updatedUser;
  } else {
    throw new Error("Incorrect password");
  }
};




//forgot password
const updatePassword = async (id, password) => {
  console.log(password);
  const hashedPassword = await bcrypt.hash(password.password, 10);
  return await userDao.updatePassword(id, hashedPassword);
};

const getUserById = async (id) => {
    return await userDao.getUserById(id);
  };
const getUsers = async () => {
    return await userDao.getAllUsers();
  };
  
  const deleteUser = async (id) => {
    return await userDao.deleteUser(id);
  };
  
  const getUserByEmail = async (email) => {
    return await userDao.getUserByEmail(email);
  };

  const updateUser = async (id, updateData) => {
    return await userDao.updateUser(id, updateData);
  };
// get User by token
const getUserByToken = async (token) => {
  return await userDao.findUserByToken(token);
};
//logout
const logout = async (id) => {
  return await userDao.logout(id);
};

 

  module.exports = {createUser
    ,getUserByToken,
     logout,
      getUserByEmail,
      getUsers,
      deleteUser,
      getUserById, 
      updateUser, 
      loginUser, 
      updatePassword
    }