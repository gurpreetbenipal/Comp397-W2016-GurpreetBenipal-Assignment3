var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //SKY CLASS ++++++++++++++++++++++++++++++++++++++++++++++
    var Sky = (function (_super) {
        __extends(Sky, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Sky() {
            _super.call(this, theme);
            this._speed.x = 5; // 5 pixels per frame
            this._reset(0);
        }
        // Check to see if the right of the sky
        // has met the right of the scene
        Sky.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(0);
            }
        };
        //Reset the sky offscreen
        Sky.prototype._reset = function (value) {
            this.x = value;
        };
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        Sky.prototype.update = function () {
            //Scroll the sky 5 pixels per frame
            this.x -= this._speed.x;
            this._checkBounds(-1340);
        };
        return Sky;
    })(objects.GameObject);
    objects.Sky = Sky;
})(objects || (objects = {}));
//# sourceMappingURL=sky.js.map