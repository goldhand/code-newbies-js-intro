/**
 * ChatRoom App
 */

/** @const socket.io-client instance */
var socket = io();

/** @const {DOMElement<form>} Form element that submits data */
var formElem = document.getElementById('chat-form');

/** @const {DOMElement<input>} Input field that contains user typed data */
var messageInputElem = document.getElementById('message-input');

/** @const {DOMElement<ul>} Messages output container */
var messagesElem = document.getElementById('messages');


/**
 * Log messages to message display
 * @param {string} message - message to write inside element
 * @param {type} [type] - type of message class
 */
function logMessage(message, type) {
  // create a new element
  var messageDisplay = document.createElement('li');

  if (type) {
    // set type of message in class name
    messageDisplay.className = type;
  }

  // set the element's text to the value of the input element
  messageDisplay.innerText = message;

  // append the element with the message text to the message container
  messagesElem.appendChild(messageDisplay);
}


// Subscribe form event listener to the submit event of the chat form
formElem.addEventListener('submit', function(event) {
  event.preventDefault();

  logMessage(messageInputElem.value, 'me');

  // reset the value of the input field
  messageInputElem.value = '';
});


// Subscribe to server new connection events
socket.on('newConnection', function(response) {
  logMessage('New Connection!', 'alert');
});
