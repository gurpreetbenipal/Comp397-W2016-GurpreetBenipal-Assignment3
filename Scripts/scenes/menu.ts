// MENU SCENE
module scenes {
    //MENU CLASS ++++++++++++++++++++++++++++++++
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _welcomeLabel: objects.Label;
        private _instructionLabel: objects.Label;
        private _playnightButton: objects.Button;
        private _playdayButton: objects.Button;
        private _sky: objects.Sky;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // added Sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            
            //Add WELCOME Label
            this._welcomeLabel = new objects.Label(
                "WELCOME to the ALADDIN's World",
                "bold 24px Cambiria",
                "#00ff00",
                config.Screen.CENTER_X + 30,
                30, true);
            this.addChild(this._welcomeLabel);
            
            //Add INSTRUCTION Label
            this._instructionLabel = new objects.Label(
                "INSTRUCTIONS:- This game is very simple to play. The character\nof the game named as ALADDIN can move up and down on the \nscreen based on the location of mouse pointer.In order to score, you \nneed to touch the bird. You will have to save your life from the \ndragons that are emmitting fires through their mouth. If Aladdin \ncollides with the dragon, then he losses his life. Only five lives \nwill be given to you at the beginning of the game. If you consumed \nall the lives, then the Game will be over. After the game is over, \nyou can play again by clicking on the Play Again Button. Now you \ncan Start the game by clicking the Play Button. All the Best !",
                "bold 22px Cambiria",
                "#ffffb3",
                config.Screen.CENTER_X + 40,
                config.Screen.CENTER_Y - 40, true);
            this.addChild(this._instructionLabel);
            
            // add the PLAY in Day button to the MENU scene
            this._playdayButton = new objects.Button(
                "PlayDayButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 170, true);
            this.addChild(this._playdayButton);
            
            // Play in Day Button event listener
            this._playdayButton.on("click", this._playDayButtonClick, this);
            
            // add the PLAY in Night button to the MENU scene
            this._playnightButton = new objects.Button(
                "PlayNightButton",
                config.Screen.CENTER_X + 160,
                config.Screen.CENTER_Y + 170, true);
            this.addChild(this._playnightButton);
            
            // Play in Night Button event listener
            this._playnightButton.on("click", this._playNightButtonClick, this);
            
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // Menu Scene updates here
        public update(): void {
            this._sky.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // PLAY in Day Button click event handler
        private _playDayButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("buttonpress");
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            
            // Switch the THEME of the Scene to DAYTHEME
            theme = config.Sky.DAYTHEME;
            
            // Generate the Background Music Infinitely
            createjs.Sound.play("dayplaysound", { "loop": -1 });
            changeScene();
        }
        
        // PLAY in Night Button click event handler
        private _playNightButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("buttonpress");
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            
            // Switch the THEME of the Scene to NIGHTTHEME
            theme = config.Sky.NIGHTTHEME;
            
            // Generate the Background Music Infinitely
            createjs.Sound.play("nightplaysound", { "loop": -1 });
            changeScene();
        }

    }
}