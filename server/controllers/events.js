var express = require('express')
  , router = express.Router();

global.events = [
{
    id: 1,
    name: 'Sly',
    hobby: 'fifa'
}
];

router.get('/', function(req, res){
    return res.json({
        events: global.events,
        error: false
    });
});

router.post('/', function(req, res){
   if(!req.body.name){
       return res.json({
        message: 'User name missing',
        error: true
    });
   } 
    global.events.push(req.body); 
          return res.json({
        message: 'Success',
        error: false
    });
});



  module.exports = router;