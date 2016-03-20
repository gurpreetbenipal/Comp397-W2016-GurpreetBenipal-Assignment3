var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /*GAMEOBJECT SUPER CLASS */
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function GameObject(bitmapString) {
            _super.call(this, assets.getResult(bitmapString));
            this._speed = new createjs.Point(0, 0);
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
            this._topBounds = 0;
            this._bottomBounds = config.Screen.HEIGHT - this._height;
            this._leftBounds = -this._width;
            this._rightBounds = config.Screen.WIDTH + this._width;
        }
        GameObject.prototype._checkBounds = function (value) {
            var resetValue = 0;
            //Check if the x value has met the reset criteria
            if (this.x <= value) {
                this._reset(resetValue);
            }
        };
        //Reset the Object offscreen
        GameObject.prototype._reset = function (value) {
            this.x = value;
        };
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        GameObject.prototype.update = function () {
            var boundValue = 0;
            //Scroll the object 5 pixels per frame
            this.x -= this._speed.x;
            this._checkBounds(boundValue);
        };
        return GameObject;
    })(createjs.Bitmap);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map