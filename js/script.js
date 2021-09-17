

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// предметы
let plain = new Image();
let stone = new Image();
let fireStone = new Image();
let sky = new Image();

plain.src = 'img/pngegg.png';
stone.src = 'img/stone-1.png';
sky.src = 'img/sky.png';
fireStone.src = 'img/fire-stone.png';

// рандомные метеориты

let meteorite = [];
meteorite[0] = {
    x : canvas.width,
    y : 0
}


// позиция метеорита
let xPosStone = 0;
let yPosStone = 0;
let grav = 1; // гравитация
// позиция огня
let xfirePosStone = 1000;
let yfirePosStone = 0;


let gridSize = 5;
let currentPosition = [
  500, 500
]



 function draw() {



     ctx.drawImage(sky, 0, 0, 1800, 900);

     ctx.drawImage(plain, currentPosition[0], currentPosition[1], 130, 130);
     
     ctx.drawImage(stone, xPosStone, yPosStone, 90, 60);

     ctx.drawImage(fireStone, xfirePosStone, yfirePosStone, 110, 110);

     yPosStone += grav; // Создание анимации
     yfirePosStone += grav;
     xfirePosStone -= grav;
     requestAnimationFrame(draw) // создание анимации

    
 
    }
   

    


    function animatoionFire() {
    
      setInterval(function ()  {
        fireStone(yfirePosStone, xfirePosStone)
        yfirePosStone++;
        xfirePosStone++;
      }, 1000 / 60)
       
    }

  

   
function moveLeft () {
  currentPosition[0] -= gridSize;
}
function moveRight() {
  currentPosition[0] += gridSize;
}
function moveUp () {
  currentPosition[1] -= gridSize;
}
function moveDown () {
  currentPosition[1] += gridSize;

    }
    document.onkeydown = function(event) {
      let keyCode;
      
      if(event == null)
      {
        keyCode = window.event.keyCode;
          
      }
      else
      {
        keyCode = event.keyCode;
      }

      switch(keyCode) {
        case 37:
         moveLeft ()
           break

          case 38:
            moveUp ()
           break
          
          case 39:
            moveRight()
            break
            
            case 40:
              moveDown ()
            break
      }

    }
    

    

    fireStone.onload = draw;


  