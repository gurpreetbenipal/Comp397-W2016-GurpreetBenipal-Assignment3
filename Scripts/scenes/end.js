var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            // added Sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            //Add GAME OVER Label
            this._gameoverLabel = new objects.Label("GAME OVER !", "bold 60px Cambiria", "#990000", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y - 40, true);
            this.addChild(this._gameoverLabel);
            this.addChild(play.scoreboard);
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button("PlayAgainButton", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y + 100, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        End.prototype.update = function () {
            this._sky.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        End.prototype._restartButtonClick = function (event) {
            createjs.Sound.play("buttonpress");
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return End;
    })(objects.Scene);
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map