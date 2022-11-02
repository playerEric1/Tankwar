#pragma strict
var bot : Transform;
var time = 0;
var behave = 0;
var Speed = -20;
function Update () {
time = time - 1;
 if(time < 0){
 behave = Random.Range(1,4);
    if(behave == 1){
    time = 300;
    }
     if(behave == 2){
    time = 100;
    }
     if(behave == 3){
    time = 100;
    }
     if(behave == 4){
    time = 100;
    }
 }
 if(behave == 1){
 bot.Translate(Vector3.forward * Time.deltaTime * Speed);
 }
 if(behave == 2){
 bot.Translate(Vector3.forward * Time.deltaTime * -Speed);
 }
 if(behave == 3){
 transform.Rotate(Vector3.up *Time.deltaTime * -30);
 }
  if(behave == 4){
 transform.Rotate(Vector3.up *Time.deltaTime * 30);
 }
}
