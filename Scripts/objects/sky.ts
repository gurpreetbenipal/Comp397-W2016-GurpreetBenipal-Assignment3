module objects{
 
    export class Sky extends createjs.Bitmap{
        //PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++
        private _speed : number;       
        
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(){
            super(assets.getResult("sky"));
            this._speed = 5;           // 5 pixels per frame
            this._reset();
        }
        
        // Check to see if the right of the sky
        // has met the right of the scene
        private _checkBounds() : void{
            if(this.x <= -1340){
                this._reset();
            }
        }
        
        //Reset the sky offscreen
        private _reset() : void{
            this.x = 0;
        }
        
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        public update() : void {
            //Scroll the sky 5 pixels per frame
            this.x -= this._speed;
            this._checkBounds();
        }
    }   
}