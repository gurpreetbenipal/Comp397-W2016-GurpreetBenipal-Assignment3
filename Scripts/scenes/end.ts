// LEFT_CAVE SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _gameoverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _sky : objects.Sky;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS ++++++++++++++++++++
        
        
        // Start Method
        public start(): void {
            // added Sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            
            //Add GAME OVER Label
            this._gameoverLabel = new objects.Label(
                "GAME OVER !", 
                "bold 60px Cambiria", 
                "#990000",
                config.Screen.CENTER_X + 50, config.Screen.CENTER_Y-40, true);
            this.addChild(this._gameoverLabel);
            
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button(
                "PlayAgainButton",
                config.Screen.CENTER_X + 50,
                config.Screen.CENTER_Y + 100, true);
            this.addChild(this._restartButton);
           
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}