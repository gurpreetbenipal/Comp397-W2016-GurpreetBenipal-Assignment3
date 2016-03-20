var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
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
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
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
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map