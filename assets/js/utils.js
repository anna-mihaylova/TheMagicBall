const Utils = (function() {
    function randomIntFromInterval(min, max) {
         return Math.floor(Math.random() * ((max - min + 1) + min));
    }

    function clearInterval(interval) {
        if (interval) {
            clearInterval(interval);
        }
    }

    function clearSetTimeOut(timeOut) {
        if (timeOut) {
            clearTimeout(timeOut);
        }
    }

    return {
        randomIntFromInterval: randomIntFromInterval,
        clearSetTimeOut: clearSetTimeOut,
        clearInterval: clearInterval
    };
})();
