var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            // added Sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            //Add WELCOME Label
            this._welcomeLabel = new objects.Label("WELCOME to the ALADDIN's World", "bold 24px Cambiria", "#00ff00", config.Screen.CENTER_X + 30, 30, true);
            this.addChild(this._welcomeLabel);
            //Add INSTRUCTION Label
            this._instructionLabel = new objects.Label("INSTRUCTIONS:- This game is very simple to play. The character\nof the game named as ALADDIN can move up and down on the \nscreen based on the location of mouse pointer.In order to score, you \nneed to touch the bird. You will have to save your life from the \ndragons that are emmitting fires through their mouth. If Aladdin \ncollides with the dragon, then he losses his life. Only five lives \nwill be given to you at the beginning of the game. If you consumed \nall the lives, then the Game will be over. After the game is over, \nyou can play again by clicking on the Play Again Button. Now you \ncan Start the game by clicking the Play Button. All the Best !", "bold 22px Cambiria", "#ffffb3", config.Screen.CENTER_X + 40, config.Screen.CENTER_Y - 40, true);
            this.addChild(this._instructionLabel);
            // add the PLAY button to the MENU scene
            this._playdayButton = new objects.Button("PlayDayButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 170, true);
            this.addChild(this._playdayButton);
            // Play Button event listener
            this._playdayButton.on("click", this._playDayButtonClick, this);
            // add the PLAY button to the MENU scene
            this._playnightButton = new objects.Button("PlayNightButton", config.Screen.CENTER_X + 160, config.Screen.CENTER_Y + 170, true);
            this.addChild(this._playnightButton);
            // Play Button event listener
            this._playnightButton.on("click", this._playNightButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
            this._sky.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY Button click event handler
        Menu.prototype._playDayButtonClick = function (event) {
            createjs.Sound.play("buttonpress");
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            theme = config.Sky.DAYTHEME;
            createjs.Sound.play("playsound", { "loop": -1 });
            changeScene();
        };
        // PLAY Button click event handler
        Menu.prototype._playNightButtonClick = function (event) {
            createjs.Sound.play("buttonpress");
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            theme = config.Sky.NIGHTTHEME;
            createjs.Sound.play("playsound", { "loop": -1 });
            changeScene();
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map