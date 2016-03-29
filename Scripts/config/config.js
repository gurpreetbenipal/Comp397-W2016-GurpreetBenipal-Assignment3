var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.PLAY = 1;
        Scene.END = 2;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 700;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
    //Sky Constants
    var Sky = (function () {
        function Sky() {
        }
        Sky.DAYTHEME = "daytheme";
        Sky.NIGHTTHEME = "nighttheme";
        return Sky;
    })();
    config.Sky = Sky;
})(config || (config = {}));
//# sourceMappingURL=config.js.map