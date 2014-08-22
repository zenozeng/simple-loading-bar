# Simple-loading-bar

Simple loading bar bind on dom.

## Demo

http://zenozeng.github.io/simple-loading-bar/demo/

## Usage

```javascript
var bar = new SimpleLoadingBar(document.querySelector('#main'));
bar.start();
setTimeout(function() {
    bar.complete();
}, 3000);
```
