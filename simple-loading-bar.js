window.SimpleLoadingBar = function(container, opts) {
    var speed = (opts && opts.speed) || 0.1; // 10% per second
    var bar = document.createElement('div');
    bar.className = "simple-loading-bar";

    var maxProgress = 0.98,
        progress = 0;
    var iter = function() {
        bar.style.width = progress * 100 + "%"
        if(progress < 1) {
            progress = Math.min(maxProgress, progress + speed / 50);
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
            maxProgress = 1;
            speed = 2;
        }
    }
}
