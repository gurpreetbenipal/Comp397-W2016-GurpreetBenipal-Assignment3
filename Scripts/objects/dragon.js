var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Dragon = (function (_super) {
        __extends(Dragon, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Dragon() {
            _super.call(this, "dragon");
            this._reset(this._rightBounds);
            this.name = "dragon";
            this.isHit = false;
        }
        // Check to see if the top of the dragon
        // has outside the viewport
        Dragon.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        //Reset the dragon offscreen
        Dragon.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
            this.isHit = false;
        };
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        Dragon.prototype.update = function () {
            //Scroll the Dragon 5 pixels per frame
            this.x -= this._speed.x;
            this.y -= this._speed.y;
            this._checkBounds(this._leftBounds);
        };
        return Dragon;
    })(objects.GameObject);
    objects.Dragon = Dragon;
})(objects || (objects = {}));
//# sourceMappingURL=dragon.js.map