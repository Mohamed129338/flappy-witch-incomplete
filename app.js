//Quest One: Variables

//code -->
var myGamePiece;

var myObstacleclos=[];

var myScore;

var flappy = "witch.png";

//Quest One Done

//--------------------------------------------------------------------------------------

//Quest Tow Functions

//code -->
function startGame()
{
    myGameArea.start();
}

var myGameArea={

    canvas:document.createElement("canvas"),
    start:function(){
       this.canvas.width=600;

       this.canvas.height=370;

       this.context=this.canvas.getContext("2d");

    this.frameno=0  

    document.body.insertBefore(this.canvas,document.body.childNodes[3]);

    this.frameNo=0;

    this.interval =setInterval(updateGameArea,20);
    },

    clear:function(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
      },

      
      stop:function(){
       clearInterval(this.interval);
      }


}

