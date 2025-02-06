/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//This is your starting index. First we start off at Home!
var index = 0;

/// Implementation using javascript class
class LocationImage {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }
}

var locationImageList = [
  new LocationImage("A purple Flower (ngl but it looks poisionous)", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Iris_sanguinea_cultivar%2C_Wakehurst_Place%2C_UK_-_Diliff.jpg/1920px-Iris_sanguinea_cultivar%2C_Wakehurst_Place%2C_UK_-_Diliff.jpg"),
  new LocationImage("Alaska Moutains reflected so it looks purple", "https://upload.wikimedia.org/wikipedia/commons/a/a7/Auke_Bay_Alaska_2.jpg"),
  new LocationImage("Purple Galaxy", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/M81.jpg/1920px-M81.jpg"),
  new LocationImage("Purple Amethyst", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Amatista_Laye_2.jpg/1920px-Amatista_Laye_2.jpg"),
  new LocationImage("A batch of those poisionous looking flower","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Devon_Violets._Viola_odorata_%2833624079715%29.jpg/2560px-Devon_Violets._Viola_odorata_%2833624079715%29.jpg")
]

function showImageWithClass() {
  var image = document.getElementById("img");
  var polaroid = document.getElementById("polaroid");

  var locationImage = locationImageList[index];
  image.src = locationImage.image;
  polaroid.title = locationImage.name;
  index = (index == locationImageList.length-1) ? 0 : (index + 1);
}

/// imaplementation using javascript object- JSON (dictionary)

const locationImageJSON = {
  imageLocation1: {
    name: "A purple Flower (ngl but it looks poisionous)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Iris_sanguinea_cultivar%2C_Wakehurst_Place%2C_UK_-_Diliff.jpg/1920px-Iris_sanguinea_cultivar%2C_Wakehurst_Place%2C_UK_-_Diliff.jpg"
  },
  imageLocation2: {
    name: "Alaska Moutains reflected so it looks purple",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Auke_Bay_Alaska_2.jpg"
  },
  imageLocation3: {
    name: "Purple Galaxy",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/M81.jpg/1920px-M81.jpg"
  },
  imageLocation4: {
    name: "Purple Amethyst",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Amatista_Laye_2.jpg/1920px-Amatista_Laye_2.jpg"
  },
  imageLocation5: {
    name: "A batch of those poisionous looking flower",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Devon_Violets._Viola_odorata_%2833624079715%29.jpg/2560px-Devon_Violets._Viola_odorata_%2833624079715%29.jpg"
  },
}

function showImageWithJSON() {
  var image = document.getElementById("img");
  var polaroid = document.getElementById("polaroid");
  
  var locationImageDict;
  switch (index) {
    case 0: 
    locationImageDict = locationImageJSON.imageLocation1;
    break;
    case 1: 
    locationImageDict = locationImageJSON.imageLocation2;
    break;
    case 2: 
    locationImageDict = locationImageJSON.imageLocation3;
    break;
    case 3: 
    locationImageDict = locationImageJSON.imageLocation4;
    break;
    case 4: 
    locationImageDict = locationImageJSON.imageLocation5;
    break;
    default:
      break;
  }
  
  image.src = locationImageDict.image;
  polaroid.title = locationImageDict.name;
  index = (index == 4) ? 0 : (index + 1);
}

//This is an array that will hold the file names! Add at least 3 images to the images array.
var images = [];
images[0] = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Iris_sanguinea_cultivar%2C_Wakehurst_Place%2C_UK_-_Diliff.jpg/1920px-Iris_sanguinea_cultivar%2C_Wakehurst_Place%2C_UK_-_Diliff.jpg";
images[1] = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Auke_Bay_Alaska_2.jpg";
images[2] = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/M81.jpg/1920px-M81.jpg";
images[3] = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Amatista_Laye_2.jpg/1920px-Amatista_Laye_2.jpg";
images[4] = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Devon_Violets._Viola_odorata_%2833624079715%29.jpg/2560px-Devon_Violets._Viola_odorata_%2833624079715%29.jpg";
//This is an array that holds the names of each location shown in your pictures.

//Make sure that the index of each location is the same as the index of the picture in the images array
var locations = [];
locations[0] = "A purple Flower (ngl but it looks poisionous)";
locations[1] = "Alaska Moutains reflected so it looks purple";
locations[2] = "Purple Galaxy";
locations[3] = "Purple Amethyst";
locations[4] = "A batch of those poisionous looking flower";

//This function will help us toggle through our photos. Everytime the button is pressed it will call this function!
function showImage() {
  // update image
  var img = document.getElementById("img");
  img.src = images[index];
  
  //update text
  var polaroid = document.getElementById("polaroid");
  polaroid.title = locations[index];
  
  // move to next image
  if(index === locations.length-1){
    index = 0;
  } else {
    index = index + 1; 
  }
}


