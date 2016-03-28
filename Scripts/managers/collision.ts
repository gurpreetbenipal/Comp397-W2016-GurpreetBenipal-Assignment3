module managers {
    //COLLISION MANAGER CLASS
    export class Collision {
        private _player: objects.Player;
        constructor(player: objects.Player) {
            this._player = player;
        }
        
        //PUBLIC METHODS
        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));

        }

        public check(object: objects.GameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this._player.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            
            //console.log(this.distance(startPoint,endPoint));
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's a Bird hit
                if (object.name === "bird" && object.image != null) {
                    createjs.Sound.play("pickupitem");
                    console.log("Bird hit!");
                    object.image = assets.getResult("");            // Hide the Bird object image
                    play.scoreboard.scores += 100;                  // Increment the player score by 100
                }
                
                // check if it's a Dragon hit
                if (object.name === "dragon" && object.isHit === false) {
                    
                    //this._player.image = assets.getResult("destroy");   // Display the player destroy image instead of Player
                    
                    createjs.Sound.play("firehit");
                    play.explosion.update(this._player.y - playerHalfHeight);
                    this._player.image = assets.getResult("");

                    setTimeout(() => {
                        play.explosion.reset(this._player.y - playerHalfHeight);
                        this._player.image = assets.getResult("aladdin");
                    }, 500);
                    
                     console.log("Dragon hit!");
                        object.isHit = true;
                        play.scoreboard.lives--;                        //Decrease the Player Lives by 1
                   
                        if (play.scoreboard.lives < 0) {
                            createjs.Sound.stop();
                            // Switch to the END Scene
                            scene = config.Scene.END;
                            changeScene();                             // Change the scene to Game Over Scene
                        }


                }
                play.scoreboard.update();                          // Update the Scoreboard (Lives and Scores)
            }
        }
    }
}