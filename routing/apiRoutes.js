var friends= require("../data/friends");

module.exports = function(app) {

  app.get("/api/friend", function(req, res) {
    res.json(friends);

  });


  app.post("/api/friend", function(req, res) {
    var scores= [];
    var totaldifference=[];
   //var newFriend = req.body;
   for(i=0;i<friends.length;i++){
     scores.push(friends[i].scores);

   }
  
   for(i=0;i<10;i++){
    var diff = scores[0][i] - req.body.scores[i]
    diff = Math.abs(diff)
    totaldifference.push(diff);
   }
   for(i=0;i<friends.length;i++){
    

  }

   
   var bestMatch = Math.min.apply(null, totaldifference) 
   console.log("this is the best:" + bestMatch)

    console.log("this is totaldiff: "+totaldifference);
    console.log(req.body.scores[1]);
  
    friends.push(req.body);
  
    res.json(req.body);

   
  });


  app.post("/api/clear", function() {

    friends = [];


  });
};