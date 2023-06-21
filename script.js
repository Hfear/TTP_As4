// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
const randButton = document.getElementById("randomize");
const subButton = document.getElementById("submit");

const img = document.getElementById("#poster-image");
const postTitle = document.getElementById("#poster-title");
const postQuote = document.getElementById("#poster-quote");




// Array of predefined poster objects
const posters = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62AEC-QATSqzmxqzeirREiHEBha8dUEyeew&usqp=CAU',
    title: 'sick fish',
    quote: 'feel better',
  },
  {
    image: 'https://img.freepik.com/free-vector/one-goldfish-white-background_1308-73185.jpg',
    title: 'Poster 2',
    quote: 'Quote 2',
  },
  {
    image: 'https://i.guim.co.uk/img/media/693da12bc9c240bbea26f571c2a65700d177df83/0_153_3600_2160/master/3600.jpg?width=1200&quality=85&auto=format&fit=max&s=67d77705314f5b363a87231dcd476666'
    ,
    title: 'Poster 3',
    quote: 'Quote 3',
  },
  // Add more poster objects as needed
];

// Event listener for randomize button
// TODO: Add an event listener to the randomizeButton that calls a function when clicked

randButton.addEventListener("click", generateRandomPoster);

// Event listener for submit button
// TODO: Add an event listener to the submitButton that calls a function when clicked
subButton.addEventListener("click", updatePoster);

// Function to generate a random poster
function generateRandomPoster() {
    console.log("generate random called");
  // TODO: Generate a random index within the range of the posters array length
 const randNum = Math.floor(Math.random() * posters.length);

  // TODO: Retrieve the random poster object from the posters array
    const nPoster = posters[randNum];

  // TODO: Call the function to update the DOM with the values from the random poster object
    updatePoster(nPoster.image, nPoster.title, nPoster.quote)

   
}

// Function to generate a custom poster
function generateCustomPoster(event) {
  event.preventDefault();

  // TODO: Retrieve the entered quote and author from the input fields

  const inputquote = document.getElementById("poster-form-quote");
  const inputTitle = document.getElementById("poster-form-title");


  // TODO: Create a custom poster object with the entered values
const newPost = {

    image : "https://th-thumbnailer.cdn-si-edu.com/zzkTp0afmWR4Kk2y9vydeIKCVwY=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/f8/b7/f8b7c715-04a2-463a-8725-cfabf98e089d/42-18622201.jpg",
    quote : inputquote,
    title : inputTitle,
};

  // TODO: Call the function to update the DOM with the values from the custom poster object
  updatePoster(newPost.image, newPost.quote, newPost.title);
}

// Function to update the poster content in the DOM
function updatePoster(imageUrl, title, quote) {
    console.log("update poster called");
  // TODO: Update the DOM with the values provided for the poster image, title, and quote

  img.src = imageUrl;
  postTitle.textContent = title; 
  postQuote.textContent = quote; 

}

