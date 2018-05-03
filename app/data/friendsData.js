// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Mary",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fusers%2Favatars%2F283045%2Fkaryme-carvalho-310.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fclose-up-photography-of-a-woman-s-face-839348%2F&docid=7LJIMIxwueaQFM&tbnid=3HyBXVdVwyHIVM%3A&vet=10ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA..i&w=200&h=200&bih=675&biw=1396&q=stock%20face%20photos%20200x200&ved=0ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA&iact=mrc&uact=8",
    surveyScores: ["2", "3", "2", "4", "4", "5", "1", "1", "2", "3"]
  },
  {
    name: "John",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fusers%2Favatars%2F283045%2Fkaryme-carvalho-310.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fclose-up-photography-of-a-woman-s-face-839348%2F&docid=7LJIMIxwueaQFM&tbnid=3HyBXVdVwyHIVM%3A&vet=10ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA..i&w=200&h=200&bih=675&biw=1396&q=stock%20face%20photos%20200x200&ved=0ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA&iact=mrc&uact=8",
    surveyScores: ["5", "2", "3", "2", "3", "1", "2", "4", "5", "4"]
  }
];

var newUserArray = [
  {
    name: "Theodore",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fusers%2Favatars%2F283045%2Fkaryme-carvalho-310.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fclose-up-photography-of-a-woman-s-face-839348%2F&docid=7LJIMIxwueaQFM&tbnid=3HyBXVdVwyHIVM%3A&vet=10ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA..i&w=200&h=200&bih=675&biw=1396&q=stock%20face%20photos%20200x200&ved=0ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA&iact=mrc&uact=8",
    surveyScores: ["3", "1", "4", "4", "2", "2", "5", "4", "2", "3"]
  }];


function evaluate(array, array2) {
  console.log("this is running");

var bestMatch = {
  name: 'name',
  photo: 'www.testphoto.com',
  pointDifference: 10000000000000
};

// / Iterate through each instance of User Responses
  for (var i = 0; i < friendsArray.length; i++) {
    // console.log('friendsArray = ' + JSON.stringify(friendsArray[i]));  // each object is dispayed in entirerty as string.
    
    var comparisonArray = []; //this will be used to evaluate the lowest matched score against the new user score
    for (var y = 0; y < 10; y++) {
      // console.log(" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!45 the value of y = " + y);
      // console.log('line 45 scores = ' + JSON.stringify(friendsArray[i].surveyScores[y]));  // each object is dispLayed in entirerty as string.
      // console.log('line 46 scores = ' + JSON.stringify(newUserArray[0].surveyScores[y]));  // each object is dispLayed in entirerty as string.
      var points = 0;
      var dif = parseInt(friendsArray[i].surveyScores[y]) - parseInt(newUserArray[0].surveyScores[y]);//removes the string from integer
      dif = Math.abs(dif);
      points = dif + dif; //this eliminates negative numbers..the 'Math.absolute' method
      comparisonArray.push(dif); // pushes the difference of this one instance to an array
      console.log("line 53 comparison array = " + comparisonArray);
        if (dif <= bestMatch.pointDifference) {
          bestMatch.name = friendsArray[i].name;
          console.log("line 58!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!best match name = " + bestMatch.name);
        }
        }
  }
  






}

//EXISTING SCORES


evaluate(friendsArray, newUserArray);

// var difference = Math.abs(user1 - user2);

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
