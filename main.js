
img = "";
objetos = [];
stats = "";



function preload(){
    img = loadImage("dog_cat.jpg");
}



function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture (VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
  objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("idzinho").innerHTML = "idzinho: Detectando Objetos"; /*id estava errado*/
 }

    function modelLoaded() {
      console.log("👍");
      stats = true;
      objectDetector.detect(video, gotResult);
    }

    function gotResult(error, results) 
    {
      if (error) {
        console.log(error);
      }
      console.log(results);
      objetos = results;
    }
  
    function draw() {
        image(video, 0, 0, 380, 380);
        if(stats != ""){
          r=random(255);
          g=random(255);
          b=random(255);
          for (i = 0; i < objetos.length; i++){  /* length estava escrito errado*/
            document.getElementById("idzinho").innerHTML = "idzinho: Objeto detectado"; /*id estava errado */
          document.getElementById("banana_um").innerHTML = "Quantidade de objetos detectados:"+ objetos.length;
          fill(r,g,b);  /*estava sem as cores*/
          porcentagem = floor(objetos[i].confidence*100);
          text(objetos[i].label + " " + porcentagem + "%", objetos[i].x + 15, objetos[i].y+15);
          noFill();
         stroke(r,g,b);
          rect(objetos[i].x, objetos[i].y, objetos[i].width, objetos[i].height);
        }
}

6    }

  