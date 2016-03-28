module objects {
    
    // PLAYER Class  ++++++++++++++++++++++++++++++++++++
    export class Explosion extends createjs.Bitmap {
     
        constructor(){
                super(assets.getResult("destroy"));
                this.reset(0);
               
        }   
        
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++++
        
        public update(player_Y : number):void{
            this.x = 10;
            this.y = player_Y; 
            this.image = assets.getResult("destroy");
        }
        
        public reset(player_Y : number):void{
            this.x = 10;
            this.y = player_Y; 
            this.image = assets.getResult("");
        }
    }
}
