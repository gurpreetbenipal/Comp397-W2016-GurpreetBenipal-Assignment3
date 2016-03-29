module objects {
    // EXPLOSION Class  ++++++++++++++++++++++++++++++++++++
    export class Explosion extends createjs.Bitmap {

        constructor() {
            super(assets.getResult("destroy"));
            this.reset(0);
        }   
        
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++++
        
        // Update the Explosion image
        public update(player_Y: number): void {
            this.x = 10;
            this.y = player_Y;                          // Y coordinate of the explosion will be same as the Player's Y coordinate
            this.image = assets.getResult("destroy");   // Display the explosion image
        }

        public reset(player_Y: number): void {
            this.x = 10;
            this.y = player_Y;
            this.image = assets.getResult("");          // Hides the explosion image or Set it to null
        }
    }
}
