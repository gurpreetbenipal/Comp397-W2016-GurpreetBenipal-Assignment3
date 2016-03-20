module objects{
    /*GAMEOBJECT SUPER CLASS */
    export class GameObject extends createjs.Bitmap{
        //PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++
        protected _speed : createjs.Point;       
        
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(bitmapString : string){
            super(assets.getResult(bitmapString));
            this._speed = new createjs.Point(0,0);
        }
        
     
        protected _checkBounds(value : number) : void{
            var resetValue : number = 0;
            //Check if the x value has met the reset criteria
            if(this.x <= value){
                this._reset(resetValue);
            }
        }
        
        //Reset the Object offscreen
        protected _reset(value : number) : void{
            this.x = value;
        }
        
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        public update() : void {
            var boundValue : number = 0; 
            //Scroll the object 5 pixels per frame
            this.x -= this._speed.x;
            this._checkBounds(boundValue);
        }
    }   
}