/**
 * ChatRoom App
 */

/** @const {DOMElement<form>} Form element that submits data */
var formElem = document.getElementById('chat-form');

/** @const {DOMElement<input>} Input field that contains user typed data */
var messageInputElem = document.getElementById('message-input');

/** @const {DOMElement<ul>} Messages output container */
var messagesElem = document.getElementById('messages');

/**
 * Form Submit Listener
 */
function formEventListener(event) {
  event.preventDefault();

  // create a new element
  var messageDisplay = document.createElement('li');

  // set the element's text to the value of the input element
  messageDisplay.innerText = messageInputElem.value;

  // append the element with the message text to the message container
  messagesElem.appendChild(messageDisplay);

  // reset the value of the input field
  messageInputElem.value = '';
}

// Subscribe form event listener to the submit event of the chat form
formElem.addEventListener('submit', formEventListener);
