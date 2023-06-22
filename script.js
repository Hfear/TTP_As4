// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
const randButton = document.getElementById("randomize");
const subButton = document.getElementById("submit");

const img = document.getElementById("poster-image");
const postTitle = document.getElementById("poster-title");
const postQuote = document.getElementById("poster-quote");




// Array of predefined poster objects
const posters = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62AEC-QATSqzmxqzeirREiHEBha8dUEyeew&usqp=CAU',
    title: 'sick fish',
    quote: ' "feel better" ',
  },
  {
    image: 'https://i.natgeofe.com/k/b6b9720a-1b63-4d14-849e-03dd415cd806/pufferfish-closeup_16x9.jpg?w=1200',
    title: 'fish ',
    quote: ' "glubglub" ',
  },
  {
    image: 'https://i.guim.co.uk/img/media/693da12bc9c240bbea26f571c2a65700d177df83/0_153_3600_2160/master/3600.jpg?width=1200&quality=85&auto=format&fit=max&s=67d77705314f5b363a87231dcd476666'
    ,
    title: 'BOTTOM TEXT',
    quote: '"bottom bottom text :)" ',
  },
  // Add more poster objects as needed
];

// Event listener for randomize button
// TODO: Add an event listener to the randomizeButton that calls a function when clicked

randButton.addEventListener("click", generateRandomPoster);

// Event listener for submit button
// TODO: Add an event listener to the submitButton that calls a function when clicked
subButton.addEventListener("click", generateCustomPoster);

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

  const inputquote = document.getElementById("poster-form-quote").value;
  const inputTitle = document.getElementById("poster-form-title").value;
  const inputImgUrl = document.getElementById("poster-form-imgURL").value;



  // TODO: Create a custom poster object with the entered values
const newPost = {

    image : inputImgUrl,
    quote : inputquote,
    title : inputTitle,
};

  // TODO: Call the function to update the DOM with the values from the custom poster object
  updatePoster(newPost.image, newPost.title, newPost.quote);
}

// Function to update the poster content in the DOM
function updatePoster(imageUrl, title, quote) {
    console.log("update poster called");
  // TODO: Update the DOM with the values provided for the poster image, title, and quote

  img.src = imageUrl;
  postTitle.textContent = title; 
  postQuote.textContent = quote
  ; 

}

