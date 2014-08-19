window.SimpleLoadingBar = function(container, opts) {
    var speed = (opts && opts.speed) || 0.01; // 10% per second
    var bar = document.createElement('div');
    bar.className = "simple-loading-bar";

    var progress = 0;
    var iter = function() {
        bar.style.width = Math.min(progress, 1) * 100 + "%"
        if(progress < 1) {
            progress += speed / 50;
            setTimeout(iter, 20);
        } else {
            bar.remove();
        }
    }
    
    container.appendChild(bar);

    return {
        start: function() {
            iter(0);
        },
        complete: function() {
            speed = 2;
        }
    }
}
