// ===============================================================================
// DATA
// Each object contains: name, photo link and survey score set in an array
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
  },
  {
    name: "Theresa",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fusers%2Favatars%2F283045%2Fkaryme-carvalho-310.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fclose-up-photography-of-a-woman-s-face-839348%2F&docid=7LJIMIxwueaQFM&tbnid=3HyBXVdVwyHIVM%3A&vet=10ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA..i&w=200&h=200&bih=675&biw=1396&q=stock%20face%20photos%20200x200&ved=0ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA&iact=mrc&uact=8",
    surveyScores: ["3", "1", "1", "4", "2", "5", "3", "2", "4", "4"]
  },
  {
    name: "David",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fusers%2Favatars%2F283045%2Fkaryme-carvalho-310.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fclose-up-photography-of-a-woman-s-face-839348%2F&docid=7LJIMIxwueaQFM&tbnid=3HyBXVdVwyHIVM%3A&vet=10ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA..i&w=200&h=200&bih=675&biw=1396&q=stock%20face%20photos%20200x200&ved=0ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA&iact=mrc&uact=8",
    surveyScores: ["3", "2", "2", "1", "5", "3", "2", "2", "3", "5"]
  },
  {
    name: "Joseph",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fusers%2Favatars%2F283045%2Fkaryme-carvalho-310.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fclose-up-photography-of-a-woman-s-face-839348%2F&docid=7LJIMIxwueaQFM&tbnid=3HyBXVdVwyHIVM%3A&vet=10ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA..i&w=200&h=200&bih=675&biw=1396&q=stock%20face%20photos%20200x200&ved=0ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA&iact=mrc&uact=8",
    surveyScores: ["5", "5", "2", "1", "2", "3", "1", "1", "3", "2"]
  },
  {
    name: "Theodore",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fusers%2Favatars%2F283045%2Fkaryme-carvalho-310.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fclose-up-photography-of-a-woman-s-face-839348%2F&docid=7LJIMIxwueaQFM&tbnid=3HyBXVdVwyHIVM%3A&vet=10ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA..i&w=200&h=200&bih=675&biw=1396&q=stock%20face%20photos%20200x200&ved=0ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA&iact=mrc&uact=8",
    surveyScores: ["1", "4", "4", "4", "4", "2", "3", "1", "1", "3"]
  },
  {
    name: "Jack",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fusers%2Favatars%2F283045%2Fkaryme-carvalho-310.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fclose-up-photography-of-a-woman-s-face-839348%2F&docid=7LJIMIxwueaQFM&tbnid=3HyBXVdVwyHIVM%3A&vet=10ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA..i&w=200&h=200&bih=675&biw=1396&q=stock%20face%20photos%20200x200&ved=0ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA&iact=mrc&uact=8",
    surveyScores: ["1", "1", "5", "3", "2", "3", "2", "3", "3", "3"]
  },
  {
    name: "Sally",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fusers%2Favatars%2F283045%2Fkaryme-carvalho-310.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fclose-up-photography-of-a-woman-s-face-839348%2F&docid=7LJIMIxwueaQFM&tbnid=3HyBXVdVwyHIVM%3A&vet=10ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA..i&w=200&h=200&bih=675&biw=1396&q=stock%20face%20photos%20200x200&ved=0ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA&iact=mrc&uact=8",
    surveyScores: ["5", "3", "1", "3", "5", "5", "2", "3", "2", "4"]
  },
  {
    name: "Yvette",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fusers%2Favatars%2F283045%2Fkaryme-carvalho-310.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fclose-up-photography-of-a-woman-s-face-839348%2F&docid=7LJIMIxwueaQFM&tbnid=3HyBXVdVwyHIVM%3A&vet=10ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA..i&w=200&h=200&bih=675&biw=1396&q=stock%20face%20photos%20200x200&ved=0ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA&iact=mrc&uact=8",
    surveyScores: ["2", "4", "4", "3", "3", "3", "4", "1", "3", "4"]
  },
  {
    name: "Penelope",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fusers%2Favatars%2F283045%2Fkaryme-carvalho-310.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fclose-up-photography-of-a-woman-s-face-839348%2F&docid=7LJIMIxwueaQFM&tbnid=3HyBXVdVwyHIVM%3A&vet=10ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA..i&w=200&h=200&bih=675&biw=1396&q=stock%20face%20photos%20200x200&ved=0ahUKEwjLhY_xy9_aAhVQTt8KHYd4CZcQMwg-KAgwCA&iact=mrc&uact=8",
    surveyScores: ["5", "4", "3", "2", "2", "1", "1", "1", "3", "3"]
  }
];

//Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
