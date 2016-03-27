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
            //Set the Dragon Count
            this._dragonCount = 3;
            //Instantiate Dragon Array
            this._dragons = new Array();
            // added Sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            // added Bird to the scene
            this._bird = new objects.Bird();
            this.addChild(this._bird);
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // added Dragons to the scene
            for (var dragon = 0; dragon < this._dragonCount; dragon++) {
                this._dragons[dragon] = new objects.Dragon();
                this.addChild(this._dragons[dragon]);
            }
            // added Collision Manager to the scene
            this._collision = new managers.Collision(this._player);
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._sky.update();
            this._bird.update();
            this._player.update();
            this._dragons.forEach(function (dragon) {
                dragon.update();
                _this._collision.check(dragon);
            });
            this._collision.check(this._bird);
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