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
