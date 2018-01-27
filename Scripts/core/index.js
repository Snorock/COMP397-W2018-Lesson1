//IIFE - Imidiately Invoked Function Expressions
//let - veriable exists only inside function
(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    function Init() {
        Start();
    }
    function Start() {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60fps
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log("Game started.....");
        // hellolabel = new createjs.Text("Hello World", "40px")
    }
    window.onload = Init;
})();
//# sourceMappingURL=index.js.map