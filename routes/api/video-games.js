var express = require('express');
var router = express.Router();
const {
    getGames,
    getGameById,
    getGameByTitle
} = require('../../dal/video-games')

//GET Video Game Collection Listing
router.get('/', async function(req, res) {
  try{
      const data = await getGames();
      res.send(data);
  }catch(err){
      console.log(err);
      res.send(500, 'Internal Server Issue, check logs');
  }
});
//Get a Video Game By id
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
//Get a Video Game By title. Not RESTful.
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

module.exports = router;
