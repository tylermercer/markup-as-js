# Markup As JS
[![NPM version](https://img.shields.io/npm/v/markup-as-js.svg?style=flat)](https://www.npmjs.org/package/markup-as-js)

A tiny, no-dependency library that provides simple functions for creating DOM nodes. Inspired by Flutter's ["UI as Code"](https://medium.com/dartlang/making-dart-a-better-language-for-ui-f1ccaf9f546c) initiative.

## Example Usage
```js
div(
  {class: "foobar"}, //This is a set of key-value pairs representing the attributes of this node
  p(null, //This node has no attributes
    "I ", //String children are automatically converted to TextNodes
    b(null, //This node also has no attributes
      "really"
    ), 
    " like cheese 🧀"
  )
);
```
The above snippet returns an HTMLElement containing the following:
```html
<div class="foobar"><p>I <b>really</b> like cheese 🧀</p></div>
```
