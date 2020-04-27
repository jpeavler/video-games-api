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
const getGameById = (id) => {
    const myPromise = new Promise((resolve, reject) =>{
        MongoClient.connnect(url, settings, function(err, client) {
            if(err){
                reject(err);
            }else{
                console.log("Connected to DB server for READ");
                const db = client.db(dbName);
                const collection = db.collection(colName);
                try{
                    const _id = new ObjectID(id);
                    const result = await collection.findOne({_id});
                    resolve(result);
                    console.log(result);
                    client.close();
                }catch(err){
                    reject(err);
                }
            }
        });
    });
    return myPromise;
};
const getGameByTitle = (title) => {};

//CREATE function
const addGame = (videoGame) => {
    const myPromise = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function(err, client) {
            if(err){
                reject(err);
            }else{
                console.log("Connected to DB server for CREATE");
                const db = client.db(dbName);
                const collection = db.collection(colName);
                collection.insertOne(videoGame, (err, result) => {
                    if(err){
                        reject(err);
                    } else{
                        resolve(result.ops[0]);
                        client.close;
                    }
                })
            }
        })
    });
    return myPromise;
};

//PUT function
const updateGame = (id, videoGame) => {};

//PATCH function
const updateGameValues = (id, videoGame) => {};

//DELETE function
const deleteGame = (id) => {};

module.exports = {
    getGames,
    getGameById,
    addGame
}