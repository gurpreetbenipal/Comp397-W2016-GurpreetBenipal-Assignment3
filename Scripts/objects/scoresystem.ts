module objects {
    export class ScoreSystem extends createjs.Container {
        // PRIVATE INSTANCE VARIABLES+++++++++++++++++++++++
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        
        // PUBLIC INSTANCE VARIABLES+++++++++++++++++++++++
        public scores: number;
        public lives: number;
        
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
            this.scores = 0;
            this.lives = 5;
            
            // Create a New Score Label
            this._scoreLabel = new objects.Label("Scores : " + this.scores, "25px Cambria bold", "#FFFFFF", 20, 10, false);
            // Create a New Lives Label
            this._livesLabel = new objects.Label("Lives Left : " + this.lives, "25px Cambria bold", "#FFFFFF", 550, 10, false);

            this.addChild(this._scoreLabel);
            this.addChild(this._livesLabel);
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        public update(): void {
            //Update the Text of Scores and Lives
            this._scoreLabel.text = "Scores : " + this.scores;
            this._livesLabel.text = "Lives Left : " + this.lives;
        }
    }
}