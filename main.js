img = "";
object = [];
states = "";
function preload()
{
          img = loadImage('dog_cat.jpg');
}

function setup()
{
          canvas = createCanvas(640,420);
          canvas.center();

          objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
          document.getElementById("states").innerHTML = "Status : Detecting Object";
}

function draw()
{
          image(img,0,0,640,420);
          
          if(states != "")
          {
                    for(i=0; i < object.length; i++)
                    {
                              document.getElementById("states").innerHTML = "Status: Object IS Detected";
                              fill("#0c69c7");
                              percent = floor(object[i].confidence * 100);
                              text(object[i].label + "" + percent + "%", object[i].x+ 15 ,object[i].y + 15);
                              noFill();
                              stroke("#0c69c7");
                              rect(object[i].x , object[i].y ,object[i].height , object[i].width);
                    }
          }
}

function modelLoaded()
{
          console.log("ModelLoaded!");
          states = true;
          objectDetector.detect(img ,gotResults);
}

function gotResults(error , results)
{
          if(error)
          {
                    console.log(error);
          }
          else
          {
                    console.log(results);
                    object = results
          }
          
}