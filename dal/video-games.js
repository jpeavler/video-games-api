const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//Connection URL and Database Settings
const url = process.env.ATLAS_CONNECTION;
const settings = {useUnifiedTopology: true};

//READ functions
const getGames = () => {};
const getGameById = (id) => {};
const getGameByTitle = (title) => {};

//CREATE function
const addGame = (videoGame) => {};

//PUT function
const updateGame = (id, videoGame) => {};

//PATCH function
const updateGameValues = (id, videoGame) => {};

//DELETE function
const deleteGame = (id) => {};

module.exports = {
    getGames
}