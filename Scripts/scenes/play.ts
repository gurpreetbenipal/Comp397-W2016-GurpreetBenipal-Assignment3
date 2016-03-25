// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sky : objects.Sky;
        private _bird : objects.Bird;
        private _fires : objects.Fire[];
        private _player : objects.Player;
        
        private _fireCount : number;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
            
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Set the Fire Count
            this._fireCount = 3;
            
            //Instantiate Fire Array
            this._fires = new Array<objects.Fire>();
            
            // added Sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            
            // added Bird to the scene
            this._bird = new objects.Bird();
            this.addChild(this._bird);
            
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            // added Fires to the scene
            for(var fire : number=0; fire < this._fireCount; fire++){
                this._fires[fire] = new objects.Fire();
                this.addChild(this._fires[fire]);
            }
    
    
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._sky.update();
            this._bird.update();
            this._player.update();
            
            this._fires.forEach(fire => {
                fire.update();
            });
            
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