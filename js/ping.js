/**
 * Creates a Ping instance.
 * @returns {Ping}
 * @constructor
 */
var Ping = function() {
    this._version = "0.0.1";
};

/**
 * Pings source and triggers a callback when completed.
 * @param source Source of the website or server.
 * @param callback Callback function to trigger when completed.
 */
Ping.prototype.ping = function(source, callback) {
    this.img = new Image();

    var start = new Date();

    this.img.onload = pingCheck;
    this.img.onerror = pingDead;

    function pingCheck() {
        var pong = new Date() - start;

        if (typeof callback === "function")
            callback(pong);
    }

    function pingDead() {
        if (typeof callback === "function")
            callback(-1);
    }

    this.img.src = source + "?" + (+new Date());
};

