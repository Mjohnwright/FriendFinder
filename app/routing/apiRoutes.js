//API friends list is not displaying on Heroku


// ===============================================================================
// DEPENDENCIES
//
// ===============================================================================
// var path = require("path");

var friendsData = require("../data/friendsData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // ---------------------------------------------------------------------------
  //FRIENDS API PAGE
  //Set this up for testing...it is working
  //This path will show all the friend user data in JSON format
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // ---------------------------------------------------------------------------
  //HANDLES NEW USER DATA (COMPARES NEW DATA TO EXISTING DATA AND PUSHES NEW DATA TO FRIENDSDATA )
  app.post("/api/friends", function(req, res) {

    // Assign the user survey to a variable
    var newSurveyInput = req.body; ///we can get this because of bodyParser middleware
    var UserScores = newSurveyInput.surveyScores;
    console.log("userInput = " + JSON.stringify(newSurveyInput));
    console.log("userScores= " + UserScores);

    // Compute best friend match
    var bestMatchName = "";
    var bestMatchPhoto = "";
    var totalDifference = 100000000000000000; 

    // Iterate through each instance of User Responses
    for (var i = 0; i < friendsData.length; i++) {
      var dif = 0;
      for (var y = 0; y < UserScores.length; y++) {
        dif += Math.abs(friendsData[i].surveyScores[y] - UserScores[y]);
      }
      console.log("dif = " + dif);

      //
      if (dif < totalDifference) {
        console.log("Closest match found = " + dif);
        console.log("Friends name = " + friendsData[i].name);
        console.log("Friend Photo = " + friendsData[i].photo);

        totalDifference = dif;
        bestMatchName = friendsData[i].name;
        bestMatchPhoto = friendsData[i].photo;
      }
    }

    //pushes the data into friendsData.js ('friendsArray')
    // friendsData.push(newSurveyInput);

    friendsData.push(req.body);
    result = {bestMatchName: bestMatchName, bestMatchPhoto: bestMatchPhoto};
    res.json(result);
  });
};
