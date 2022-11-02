#pragma strict
var turnIng : Transform;
var aim : Transform;

function Update () {
   turnIng.localRotation.y = aim.localRotation.y;
   
    }