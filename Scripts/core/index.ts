//IIFE - Imidiately Invoked Function Expressions
//let - veriable exists only inside function
(function(){

let canvas = document.getElementById("canvas");
let stage: createjs.Stage;

    function Init():void{
        
        Start();
    }

    function Start():void{
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60fps
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update():void{
        stage.update();
    }

    function Main():void{
        console.log("Game started.....");
        // hellolabel = new createjs.Text("Hello World", "40px")
    }

    window.onload = Init;

})();