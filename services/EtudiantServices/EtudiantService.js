const etudiantDao = require("../../dao/studentDao/studentDao");
const fs = require('fs');
const path = require('path');

const registerEtudiant = async (userData, documents) => {
  try {
    const saveResult = await saveDocumentToServer(documents);
    if (saveResult) {
      const newEtudiant = await etudiantDao.createEudiant(userData);
      return newEtudiant;
    } else {
      throw new Error('Failed to save documents.');
    }
  } catch (error) {
    console.error('Error registering etudiant:', error);
    throw error;
  }
};

// Function to save documents
async function saveDocumentToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    await saveAdministrativeFile(file.base64String, file.name, file.path);
    counter++;
    console.log('File number ' + counter + ' saved');
  }
  return counter === documents.length;
}

async function saveAdministrativeFile(base64String, fileName, filePath) {
  const binaryData = Buffer.from(base64String, 'base64');
  const fullFilePath = path.join(filePath, fileName);

  // Ensure the directory exists
  await fs.promises.mkdir(filePath, { recursive: true });

  await fs.promises.writeFile(fullFilePath, binaryData, 'binary');
  console.log('File saved successfully at:', fullFilePath);
}

const getEtudiants = async () => {
  const result = await etudiantDao.getEtudiants();
  return result;
};

module.exports = {
    getEtudiants,
    registerEtudiant
};