const express = require('express');
const router=express.Router();

const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      location: {
        lat: 40.7484474,
        lng: -73.9871516
      },
      address: '20 W 34th St, New York, NY 10001',
      creator: 'u1'
    }
  ];


console.log("start");

router.get('/:pid', (req,res,next)=>{
    const placeId = req.params.pid;
    console.log("here");
    //console.log('get request in places');
    const place = DUMMY_PLACES.find(p=>{
        return p.id===placeId;
    });

    if(!place) {
        //using return here exits, so wont do the next step.
        return res.status(404).json({message:"could not find this place"});
    }
    res.json({place});  //=> {place} =>{place:place}
  });

  router.get('/user/:uid', (req,res,next)=>{
    const userId = req.params.uid;
    console.log(userId);
    //console.log('get request in places');
    const place = DUMMY_PLACES.find(p=>{
        return p.creator===userId;
    });

    if(!place) {
        //using return here exits, so wont do the next step.
        return res.status(404).json({message:"could not find this place"});
    }
 
    res.json({place});  //=> {place} =>{place:place}
  });


module.exports = router;
