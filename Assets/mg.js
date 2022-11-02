#pragma strict
var turnIng : Transform;
var aim : Transform;

function Update () {
   turnIng.localRotation.x = aim.localRotation.x;
}