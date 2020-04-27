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
        MongoClient.connect(url, settings, function(err, client) {
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
        MongoClient.connect(url, settings, async function(err, client) {
            if(err){
                reject(err);
            }else{
                console.log("Connected to DB server for READ by ID");
                const db = client.db(dbName);
                const collection = db.collection(colName);
                try{
                    const _id = new ObjectID(id);
                    const result = await collection.findOne({_id});
                    if(data.lastErrorObject.n > 0) {
                        resolve(result);
                    }else{
                        resolve({error: "ID doesn't exist in database"});
                    }
                    console.log(result);
                    client.close();
                }catch(err){
                    reject({error: "ID must be in ObjectID format"});
                }
            }
        });
    });
    return myPromise;
};

const getGameByTitle = (title) => {
    const myPromise = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, async function(err, client) {
            if(err){
                reject(err);
            }else{
                console.log("Connected to DB server for READ by Title");
                const db = client.db(dbName);
                const collection = db.collection(colName);
                try{
                    const result = await collection.findOne({title});
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

//UPDATE: PUT function
const updateGame = (id, videoGame) => {
    const myPromise = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function(err, client) {
            if(err){
                reject(err);
            }else{
                console.log('Connected to DB server for for UPDATE: PUT');
                const db = client.db(dbName);
                const collection = db.collection(colName);
                collection.replaceOne({_id: ObjectID(id)},
                    videoGame,
                    {upsert: true},
                    (err, result) => {
                        if(err){
                            reject(err);
                        }else{
                            resolve({updated_id: id});
                            client.close;
                        }
                    })
            }
        })
    });
    return myPromise;
};

//UPDATE: PATCH function
const updateGameValues = (id, videoGame) => {
    const myPromise = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, async function(err, client) {
            if(err){
                reject(err);
            }else{
                console.log("Connected to DB server for UPDATE: PATCH");
                const db = client.db(dbName);
                const collection = db.collection(colName);
                try{
                    const _id = new ObjectID(id);
                    collection.updateOne({_id},
                        {$set: {...videoGame} },
                        function (err, data) {
                            if(err){
                                reject(err);
                            }else{
                                if(data.result.n > 0){
                                    collection.find({_id}).toArray(
                                        function(err, docs){
                                            if(err){
                                                reject(err);
                                            }else{
                                                resolve(docs[0]);
                                            }
                                        }
                                    )
                                }else{
                                    resolve({error: "Nothing happened"})
                                }
                            }
                        });
                }catch(err){
                    reject({error: "ID has to be in ObjectID format"})
                }
            }
        });
    });
    return myPromise;
};

//DELETE function
const deleteGame = (id) => {
    const myPromise = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, async function(err, client) {
            if(err){
                reject(err);
            }else{
                console.log("Connected to DB server for DELETE");
                const db = client.db(dbName);
                const collection = db.collection(colName);
                try{
                    const _id = new ObjectID(id);
                    collection.findOneAndDelete({_id}, function (err, data) {
                        if(err){
                            reject(err);
                        }else{
                            if(data.lastErrorObject.n > 0) {
                                resolve(data.value);
                            }else{
                                resolve({error: "ID doesn't exist in database"});
                            }
                        }
                    });
                }catch(err){
                    reject({ error: "ID has to be in ObjectID format"});
                }
            }
        });
    });
    return myPromise;
};

module.exports = {
    getGames,
    getGameById,
    getGameByTitle,
    addGame,
    updateGame,
    updateGameValues,
    deleteGame
}