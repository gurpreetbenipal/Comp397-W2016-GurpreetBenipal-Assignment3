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
            var _this = this;
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._player.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            //console.log(this.distance(startPoint,endPoint));
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's a Bird hit
                if (object.name === "bird" && object.image != null) {
                    createjs.Sound.play("pickupitem"); // Generate the Item(Bird) pick sound
                    console.log("Bird hit!");
                    object.image = assets.getResult(""); // Hide the Bird object image
                    play.scoreboard.scores += 100; // Increment the player score by 100
                }
                // check if it's a Dragon hit
                if (object.name === "dragon" && object.isHit === false) {
                    createjs.Sound.play("firehit"); // Generate the explosion sound
                    // Update the explosion image
                    play.explosion.update(this._player.y - playerHalfHeight);
                    // Hides the player image
                    this._player.image = assets.getResult("");
                    setTimeout(function () {
                        // Reset (Hide) the explosion image after half second
                        play.explosion.reset(_this._player.y - playerHalfHeight);
                        // Show the player image
                        _this._player.image = assets.getResult("aladdin");
                    }, 500);
                    console.log("Dragon hit!");
                    object.isHit = true; // Make the isHit true, when dragon hits the player
                    play.scoreboard.lives--; //Decrease the Player Lives by 1
                    //Check if the Lives count reaches to less than zero
                    if (play.scoreboard.lives < 0) {
                        play.scoreboard.lives = 0;
                        createjs.Sound.stop(); //Stop the background music
                        // Switch to the END Scene
                        scene = config.Scene.END;
                        changeScene(); // Change the scene to Game Over Scene
                    }
                }
                play.scoreboard.update(); // Update the Scoreboard (Lives and Scores)
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map