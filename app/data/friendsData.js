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
    quest1: 2
    // quest2: 1,
    // quest3: 5,
    // quest4: 4,
    // quest5: 2,
    // quest6: 3,
    // quest7: 1,
    // quest8: 4,
    // quest9: 4,
    // quest10: 2
  }
  
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
