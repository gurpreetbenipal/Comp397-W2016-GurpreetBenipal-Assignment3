var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Fire = (function (_super) {
        __extends(Fire, _super);
        //PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Fire() {
            _super.call(this, "fire");
            this._reset(this._rightBounds);
        }
        // Check to see if the top of the fire
        // has outside the viewport
        Fire.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        //Reset the fire offscreen
        Fire.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        Fire.prototype.update = function () {
            //Scroll the fire 5 pixels per frame
            this.x -= this._speed.x;
            this.y -= this._speed.y;
            this._checkBounds(this._leftBounds);
        };
        return Fire;
    })(objects.GameObject);
    objects.Fire = Fire;
})(objects || (objects = {}));
//# sourceMappingURL=fire.js.map