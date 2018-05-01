// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

var friendsData = require("../data/friendsData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
 
 
  //Set this up for testing...it is working
  app.get("/api/friendsArray", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friendsArray", function(req, res) {
    friendsData.push(req.body);
  });

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];
    console.log(friendsData);
  });

}




//POST ROUTE LOGIC:

var user1 = friendsData.scores;
// console.log("apiROutes = " + user1);

//return a whole number
// Math.abs(x);
