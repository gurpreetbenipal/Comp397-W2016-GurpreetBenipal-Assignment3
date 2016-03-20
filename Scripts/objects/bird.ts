module objects{
 
    export class Bird extends objects.GameObject{
        //PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++
            
        
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(){
            super("bird");
            this._speed.x = 5;           // 5 pixels per frame
            this._reset(this._rightBounds);
        }
        
        // Check to see if the top of the bird
        // has outside the viewport
        protected _checkBounds(value:number) : void{
            if(this.x <= value){
                 this._reset(this._rightBounds);
                //this._reset(this._width + config.Screen.WIDTH);
            }
        }
        
        //Reset the bird offscreen
        protected _reset(value:number) : void{
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }
        
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        public update() : void {
            //Scroll the bird 5 pixels per frame
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds );
        }
    }   
}