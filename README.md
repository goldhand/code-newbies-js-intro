Code-newbies Intro to Javascript
================================

This is a fast introduction to javascript.


Javascript Crash Course
-----------------------
Let's run over a bunch of javascript stuff so you research the material later on your own.

### Comments ###

* Lines starting with `//` will be ignored by the javascript runtime.
* Same for blocks surrounded with `/*` and `*/`.

### Primitive Datatypes ###

* undefined
* null
* boolean
* string
* number

### Objects ###
Objects in javascript can be thought of as a set of properties. Each property has a key and a value. The key of a property can be used to get or set values.

```javascript
{
  key: 'value',
  color: 'blue',
}
```

### Statements ###
In HTML, JavaScript statements are "instructions" to be "executed" by the web browser.

* `var` - Declares a variable, optionally initializing it to a value.
* `if` - Executes a statement if a statement is true.
* `for` - Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.

See a list of all javascript [statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)


### Operators ###
Just go over the operators that are used when building the `chatApp`.

* `=` - Assignment operator. Will set a variable to a value. The left value the target of the assignment.
* `===` - Comparison operator. Checks type and value are equal.
* `!==` - Comparison operator. Checks type and value are *not* equal.
* `+` - Arithmetic operator. Returns the sum of the left and right values.

Operator example:
```javascript
// Assignment
var myVariable = 1;

// Comparison
1 !== 2

// Arithmetic
1 + 1
```

Operators can be used together:
```javascript
// Assignment and arithmetic
var two = 1 + 1;

// Assignment and comparison
var isFalse = 1 === two;
```

For a full list, see this [list of javascript operators](http://www.w3schools.com/jsref/jsref_operators.asp).

### Functions ###
Functions, the last javascript datatype, are not primitives. They take **arguments** and can **return** values.

The `function` declaration **declares** (defines) a function with specified parameters.
```javascript
function add(argument1, argument2) {
  return argument1 + argument2;
}
```

To use a function, you need to **invoke** it.
```javascript
var two = add(1, 1);
```

Notice that when used with the *assignment* operator, `=`, that value that is **returned** by the function will be assigned to the variable on the left.


Workshop: Chat Application
--------------------------
To put these concepts to use we are going to build a simple chat room application.
This will demonstrate two different javascript runtimes, the client browser and the server NodeJS runtime.
You can also use the end result as a starting point for other explorative javascript projects.
This repository is used to show solutions for each step of the lesson.
To check your code against the working solution, you can click the title of the step below or select the tag for the corresponding step.

### [Step 1: Hello Worlding][step-1] ###
Create an `index.html`, `index.js` and `style.css` files then add a minimal amount of code to make sure they are all working.

### [Step 2: HTML / CSS][step-2] ###
Copy some styles and html into the app or write your own.

### [Step 3: Client Javascript][step-3] ###
Write some code that appends the text input value to a the messages list then resets the message input.

### [Step 4: Server Javascript][step-4] ###
Setup a simple node server that serves our `index.html`, `index.js` and `style.css` files.

### [Step 5: Socket.IO][step-5] ###
Add socket.io to the project and dispatch messages to our server (instead of just appending them to our display).

### [Step 6: Communicate][step-6] ###
Use socket.io from the server to listen for chat messages then dispatch those messages to all connected clients. In the client, listen for chat events and display the message value in the messages list.


[step-1]: https://github.com/goldhand/code-newbies-js-intro/tree/step-1
[step-2]: https://github.com/goldhand/code-newbies-js-intro/tree/step-2
[step-3]: https://github.com/goldhand/code-newbies-js-intro/tree/step-3
[step-4]: https://github.com/goldhand/code-newbies-js-intro/tree/step-4
[step-5]: https://github.com/goldhand/code-newbies-js-intro/tree/step-5
[step-6]: https://github.com/goldhand/code-newbies-js-intro/tree/step-6
