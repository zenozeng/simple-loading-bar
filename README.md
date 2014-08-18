# Simple-loading-bar

Simle loading bar bind on dom.

## Usage

```javascript
var bar = new SimpleLoadingBar(document.querySelector('#main'));
 bar.start();
 setTimeout(function() {
     bar.complete();
 }, 3000);
```
