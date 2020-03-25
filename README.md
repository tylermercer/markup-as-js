# Markup As JS
[![NPM version](https://img.shields.io/npm/v/markup-as-js.svg?style=flat)](https://www.npmjs.org/package/markup-as-js)

A tiny, no-dependency library that provides simple functions for creating DOM nodes. Inspired by Flutter's ["UI as Code"](https://medium.com/dartlang/making-dart-a-better-language-for-ui-f1ccaf9f546c) initiative.

## Installation
```
npm install --save markup-as-js
```

## Example Usage
```js
import { div, p, b } from 'markup-as-js';

let el = div(
  {class: "foobar"}, //This is a set of key-value pairs representing the attributes of this node
  p(
    "I ", //String children are automatically converted to TextNodes
    b(
      "really"
    ), 
    " like cheese 🧀"
  )
);

console.log(el);
```
The above snippet creates an HTMLElement containing the following:
```html
<div class="foobar"><p>I <b>really</b> like cheese 🧀</p></div>
```
