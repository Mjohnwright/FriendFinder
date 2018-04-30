// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

}

//POST ROUTE LOGIC:

var user1 = friendsData.scores;
// console.log("apiROutes = " + user1);