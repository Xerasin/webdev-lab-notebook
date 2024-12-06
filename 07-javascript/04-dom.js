// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
const copyButton = document.getElementById("copy");
const userInput1 = document.getElementById("userInput1");
const outputDiv = document.querySelector(".output");

// add an event listener on the target element
copyButton.addEventListener("click", function () {
  // Callback function to handle the event
  outputDiv.textContent = userInput1.value;
});

// Exercise #2:

// fetch JavaScript objects representing specific elements in the DOM
const userInput2 = document.getElementById("userInput2");
const outputParagraph = document.querySelector("#inputEventExample p");

// add an event listener on the target element
userInput2.addEventListener("input", function () {
  // when the user enters input text, copy the user input to the output area
  outputParagraph.textContent = userInput2.value;
});
