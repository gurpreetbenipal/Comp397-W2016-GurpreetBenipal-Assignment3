// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sky : objects.Sky;
        private _bird : objects.Bird;
        private _fire : objects.Fire;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
           
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            // added Sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            
            // added Bird to the scene
            this._bird = new objects.Bird();
            this.addChild(this._bird);
            
            // added Fire to the scene
            this._fire = new objects.Fire();
            this.addChild(this._fire);
    
    
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._sky.update();
            this._bird.update();
            this._fire.update();
           /* this._ocean.update();
            this._island.update();
           
            this._player.update();
           
            this._clouds.forEach(cloud => {
                cloud.update();
                this._collision.check(cloud);
            });
            
            this._collision.check(this._island);
            */
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}