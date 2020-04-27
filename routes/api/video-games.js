var express = require('express');
var router = express.Router();
const {
    getGames,
    getGameById
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
        console.log(err);
        res.send(500, 'Internal Server Issue, check logs');
    }
})

module.exports = router;
