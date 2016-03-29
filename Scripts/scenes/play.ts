// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sky : objects.Sky;
        private _bird : objects.Bird;
        private _dragons : objects.Dragon[];
        private _player : objects.Player;
        private _collision : managers.Collision;
        private _dragonCount : number;
        
        //PUBLIC INSTANCE VARIABLES ++++++++++++
        public scoreboard : objects.ScoreSystem;
        public explosion : objects.Explosion;
        
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
            
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            //Set the Dragon Count
            this._dragonCount = 3;
            
            //Instantiate Dragon Array
            this._dragons = new Array<objects.Dragon>();
            
            // added Sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            
            // added Bird to the scene
            this._bird = new objects.Bird();
            this.addChild(this._bird);
            
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
             //added Explosion to the scene
            this.explosion = new objects.Explosion();
            this.addChild(this.explosion);
            
            // added Dragons to the scene
            for(var dragon : number=0; dragon < this._dragonCount; dragon++){
                this._dragons[dragon] = new objects.Dragon();
                this.addChild(this._dragons[dragon]);
            }
            
           
            
            //added ScoreSystem to the scene
            this.scoreboard = new objects.ScoreSystem();
            this.addChild(this.scoreboard);
            
            // added Collision Manager to the scene
            this._collision = new managers.Collision(this._player);
            
            stage.addChild(this);
            
        }

        // PLAY Scene updates here
        public update(): void {
            this._sky.update();
            this._bird.update();
            this._player.update();
            this._dragons.forEach(dragon => {
                
                dragon.update();
                this._collision.check(dragon);
                
            });
            
            this._collision.check(this._bird);
            
         
        } 
        
    }
}