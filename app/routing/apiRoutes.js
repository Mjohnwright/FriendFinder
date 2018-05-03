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
    var UserScores = req.body.surveyScores;
    console.log('userInput = ' + JSON.stringify(newSurveyInput));
    console.log('userSCores= ' + UserScores);

   
    var bestMatch = {
      name: 'name',
      photo: 'www.testphoto.com',
      pointDifference: 10000000000000
    };

    
    // / Iterate through each instance of User Responses
  for (var i = 0; i < friendsData.length; i++) {
    // console.log('friendsArray = ' + JSON.stringify(friendsArray[i]));  // each object is dispayed in entirerty as string.
    
    var comparisonArray = []; //this will be used to evaluate the lowest matched score against the new user score
    for (var y = 0; y < UserScores.length; y++) {
      var points = 0;
      var dif = parseInt(UserScores[y]) - parseInt(friendsData[i].surveyScores[y]);//removes the string from integer
      dif = Math.abs(dif);
      points = dif + dif; //this eliminates negative numbers..the 'Math.absolute' method
      // comparisonArray.push(dif); // pushes the difference of this one instance to an array
      // console.log("line 53 comparison array = " + comparisonArray);
        if (dif <= bestMatch.pointDifference) {
          bestMatch.name = friendsData[i].name;
          console.log("line 58!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!best match name = " + bestMatch.name);
        }
        }
  }


    //pushes the data into friendsData.js ('friendsArray')
    friendsData.push(newSurveyInput);});
}

