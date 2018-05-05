// ===============================================================================
// DATA
// Each object contains: name, photo link and survey score set in an array
// ===============================================================================

var friendsArray = [
  {
    name: "Mary",
    photo:
      "https://vignette.wikia.nocookie.net/prowrestling/images/7/7c/Hulk_Hogan_16.jpg/revision/latest?cb=20091002143822",
    surveyScores: ["2", "3", "2", "4", "4", "5", "1", "1", "2", "3"]
  },
  {
    name: "John",
    photo:
      "https://s-media-cache-ak0.pinimg.com/originals/a9/09/b4/a909b465a163e1c0b895b6e8843d99bc.jpg",
    surveyScores: ["5", "2", "3", "2", "3", "1", "2", "4", "5", "4"]
  },
  {
    name: "Theresa",
    photo:
      "http://www.writeups.org/wp-content/uploads/Honky-Tonk-Man-wrestler.jpg",
    surveyScores: ["3", "1", "1", "4", "2", "5", "3", "2", "4", "4"]
  },
  {
    name: "David",
    photo:
      "http://iamjekker.com/wp-content/uploads/2015/06/9156859_orig.jpg",
    surveyScores: ["3", "2", "2", "1", "5", "3", "2", "2", "3", "5"]
  },
  {
    name: "Joseph",
    photo:
      "https://s-media-cache-ak0.pinimg.com/236x/83/12/7a/83127a08e032b7ecf0ba28ce7c27ba81.jpg",
    surveyScores: ["5", "5", "2", "1", "2", "3", "1", "1", "3", "2"]
  },
  {
    name: "Theodore",
    photo:
      "http://splitsider.awlnetwork.com/wp-content/uploads/sites/2/2016/09/jake-the-snake-roberts.jpg",

    surveyScores: ["1", "4", "4", "4", "4", "2", "3", "1", "1", "3"]
  },
  {
    name: "Jack",
    photo:
    "http://splitsider.awlnetwork.com/wp-content/uploads/sites/2/2016/09/jake-the-snake-roberts.jpg",
        surveyScores: ["1", "1", "5", "3", "2", "3", "2", "3", "3", "3"]
  },
  {
    name: "Sally",
    photo:
      "https://vignette2.wikia.nocookie.net/supergreatfrien/images/4/40/Andre.png/revision/latest?cb=20140709032847",
    surveyScores: ["5", "3", "1", "3", "5", "5", "2", "3", "2", "4"]
  },
  {
    name: "Yvette",
    photo:
      "https://ringthedamnbell.files.wordpress.com/2015/11/mantas.jpg",
    surveyScores: ["2", "4", "4", "3", "3", "3", "4", "1", "3", "4"]
  },
  {
    name: "Penelope",
    photo:
      "https://i2-prod.mirror.co.uk/incoming/article6366452.ece/ALTERNATES/s1200/Superfly.png",
    surveyScores: ["5", "4", "3", "2", "2", "1", "1", "1", "3", "3"]
  }
];

//Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
