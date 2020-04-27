const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//Connection URL and Database Settings
const url = process.env.ATLAS_CONNECTION;
const settings = {useUnifiedTopology: true};

//Database and Collection Names
const dbName = 'game_collection';
const colName = 'video_games';

//READ functions
const getGames = () => {
    const myPromise = new Promise((resolve, reject) =>{
        MongoClient.connnect(url, settings, function(err, client) {
            if(err){
                reject(err);
            }else{
                console.log("Connected to DB server for READ");
                const db = client.db(dbName);
                const collection = db.collection(colName);
                collection.find({}).toArray(function(err, docs) {
                    if(err){
                        reject(err);
                    } else {
                        console.log("Found the following Video Games")
                        console.log(docs);
                        resolve(docs);
                        client.close();
                    }
                });
            }
        });
    });
    return myPromise;
};
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