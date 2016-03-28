var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER Class  ++++++++++++++++++++++++++++++++++++
    var Explosion = (function (_super) {
        __extends(Explosion, _super);
        function Explosion() {
            _super.call(this, assets.getResult("destroy"));
            this.reset(0);
        }
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++++
        Explosion.prototype.update = function (player_Y) {
            this.x = 10;
            this.y = player_Y;
            this.image = assets.getResult("destroy");
        };
        Explosion.prototype.reset = function (player_Y) {
            this.x = 10;
            this.y = player_Y;
            this.image = assets.getResult("");
        };
        return Explosion;
    })(createjs.Bitmap);
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map