module objects{
 
    export class Dragon extends objects.GameObject{
        //PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++
            
        
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(){
            super("dragon");
            
            this._reset(this._rightBounds);
            this.name="dragon";
        }
        
        // Check to see if the top of the dragon
        // has outside the viewport
        protected _checkBounds(value:number) : void{
            if(this.x <= value){
                 this._reset(this._rightBounds);
               
            }
        }
        
        //Reset the dragon offscreen
        protected _reset(value:number) : void{
            this._speed.x = Math.floor(Math.random()* 5) + 5;          
            this._speed.y = Math.floor(Math.random()* 4) - 2;         
            
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }
        
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        public update() : void {
            //Scroll the Dragon 5 pixels per frame
            this.x -= this._speed.x;
            this.y -= this._speed.y;
            this._checkBounds(this._leftBounds );
        }
    }   
}