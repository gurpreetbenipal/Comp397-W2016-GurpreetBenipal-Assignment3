module objects{
    /*GAMEOBJECT SUPER CLASS */
    export class GameObject extends createjs.Bitmap{
        //PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++
        protected _speed : createjs.Point;  
        protected _width : number;
        protected _height : number; 
        protected _leftBounds : number;
        protected _rightBounds : number;   
        protected _topBounds : number;
        protected _bottomBounds : number;   
        
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(bitmapString : string){
            super(assets.getResult(bitmapString));
            this._speed = new createjs.Point(0,0);
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
            this._topBounds = 0;
            this._bottomBounds = config.Screen.HEIGHT - this._height;
            this._leftBounds = -this._width;
            this._rightBounds = config.Screen.WIDTH + this._width;
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