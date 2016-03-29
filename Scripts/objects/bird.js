var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Bird = (function (_super) {
        __extends(Bird, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Bird() {
            _super.call(this, "bird");
            this._speed.x = 5; // Bird Speed
            this._reset(this._rightBounds);
            this.name = "bird";
        }
        // Check to see if the top of the bird
        // has outside the viewport
        Bird.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        //Reset the bird offscreen
        Bird.prototype._reset = function (value) {
            this.image = assets.getResult("bird");
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        Bird.prototype.update = function () {
            //Scroll the bird 5 pixels per frame
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Bird;
    })(objects.GameObject);
    objects.Bird = Bird;
})(objects || (objects = {}));
//# sourceMappingURL=bird.js.map