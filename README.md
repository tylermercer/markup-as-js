# Markup As JS
A tiny, no-dependency library that provides simple functions for creating DOM nodes. Inspired by Flutter's ["UI as Code"](https://medium.com/dartlang/making-dart-a-better-language-for-ui-f1ccaf9f546c) initiative.

## Example Usage
```js
div(
  {class: "foobar"}, 
  p(null,
    "I ", 
    b(null, 
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