// Added 6/3
const db = require('../config/connection');
const models = require('../models');

module.exports = async (modelName, collectionName) => {
  try {
    const model = models[modelName];
    if (!model) {
      throw new Error(`Model ${modelName} does not exist`);
    }

    const collectionExists = await db.db.listCollections({ name: collectionName }).hasNext();

    if (collectionExists) {
      await db.dropCollection(collectionName);
      console.log(`${collectionName} collection dropped`);
    }
  } catch (err) {
    console.error(`Error dropping ${collectionName} collection:`, err);
    throw err;
  }
};
