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
  // ---------------------------------------------------------------------------
  //FRIENDS API PAGE
  //Set this up for testing...it is working
  //This path will show all the friend user data in JSON format
  app.get("/api/friendsArray", function(req, res) {
    res.json(friendsData);
  });

  // ---------------------------------------------------------------------------
  //HANDLES NEW USER DATA (COMPARES NEW DAT TO EXISTING DATA AND PUSHES NEW DATA TO FRIENDSDATA )

  app.post("/api/friendsArray", function(req, res) {

    // Assign the user survey to a variable
		var newSurveyInput = req.body;
    console.log('userInput = ' + JSON.stringify(newSurveyInput));

    var userScores = newSurveyInput.scores;
		console.log('userScores = ' + userScores);
    
    	// Iterate through each instance of User
		for (var i = 0; i < friendsArray.length; i++) {
      console.log('friend = ' + JSON.stringify(friendsArray[i]));  // each object is dispayed in entirety.
      

  
  
    //pushes the data into friendsData.js ('friendsArray')
    friendsData.push(UserInput);

  
  
  });

}




//POST ROUTE LOGIC:

var user1 = friendsData.scores;
// console.log("apiROutes = " + user1);

//return a whole number
// Math.abs(x);
