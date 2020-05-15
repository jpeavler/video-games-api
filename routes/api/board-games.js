let express = require('express');
let router = express.Router();
const {
    getGames,
    getGameById,
    getGameByTitle,
    addGame,
    updateGame,
    updateGameValues,
    deleteGame
} = require('../../dal/board-games');

//GET Board Game Collection Listing
router.get('/', async function(req, res) {
  try{
      const data = await getGames();
      res.send(data);
  }catch(err){
      console.log(err);
      res.send(500, 'Internal Server Issue, check logs');
  }
});
//Get a Board Game By id
router.get('/:id', async function(req, res) {
    try{
        const game = await getGameById(req.params.id);
        res.send(game);
    }catch(err){
        if(err.error){
            res.status(400).send(err);
        }else{
            console.log(err);
            res.send(500, 'Internal Server Issue, check logs');
        }

    }
});
//Get a Board Game By title. Not completely RESTful.
router.get('/title/:title', async function(req, res) {
    try{
        const gameName = req.params.title.replace(/_/g, " ");
        console.log(gameName);
        const game = await getGameByTitle(gameName);
        res.send(game);
    }catch(err){
        if(err.error){
            res.status(400).send(err);
        }else{
            console.log(err);
            res.send(500, 'Internal Server Issue, check logs');
        }

    }
});
//Post a Board Game
router.post('/', async function(req, res) {
    try{
        const game = await addGame(req.body);
        res.send(game);
    }catch(err){
        if(err.error){
            res.status(400).send(err);
        }else{
            console.log(err);
            res.send(500, 'Internal Server Issue, check logs');
        }
    }
});
//Put: Upsert a Board Game
router.put('/:id', async function(req, res) {
    try{
        const game = await updateGame(req.params.id, req.body);
        res.send(game);
    }catch(err){
        if(err.error){
            res.status(400).send(err);
        }else{
            console.log(err);
            res.send(500, 'Internal Server Issue, check logs');
        }
    }
});
router.patch('/:id', async function(req, res) {
    try{
        const game = await updateGameValues(req.params.id, req.body);
        res.send(game);
    }catch(err){
        if(err.error){
            res.status(400).send(err);
        }else{
            console.log(err);
            res.send(500, 'Internal Server Issue, check logs');
        }
    }
})
//Delete a Board Game by id.
router.delete('/:id', async function(req, res) {
    try{
        const data = await deleteGame(req.params.id);
        res.send(data);
    }catch(err){
        if(err.error){
            res.status(400).send(err);
        }else{
            console.log(err);
            res.status(500).send('Internal Server Issue, check logs');
        }
    }
});

module.exports = router;
