var managers;
(function (managers) {
    //COLLISION MANAGER CLASS
    var Collision = (function () {
        function Collision(player) {
            this._player = player;
        }
        //PUBLIC METHODS
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        Collision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._player.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX;
            endPoint.y = object.centerY;
            //console.log(this.distance(startPoint,endPoint));
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                console.log("Collision Occur");
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map