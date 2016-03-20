var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Sky = (function (_super) {
        __extends(Sky, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Sky() {
            _super.call(this, assets.getResult("sky"));
            this._speed = 5; // 5 pixels per frame
            this._reset();
        }
        // Check to see if the right of the sky
        // has met the right of the scene
        Sky.prototype._checkBounds = function () {
            if (this.x <= -1340) {
                this._reset();
            }
        };
        //Reset the sky offscreen
        Sky.prototype._reset = function () {
            this.x = 0;
        };
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        Sky.prototype.update = function () {
            //Scroll the sky 5 pixels per frame
            this.x -= this._speed;
            this._checkBounds();
        };
        return Sky;
    })(createjs.Bitmap);
    objects.Sky = Sky;
})(objects || (objects = {}));
//# sourceMappingURL=sky.js.map