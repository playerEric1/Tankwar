#pragma strict
var mainCamera : Transform;
var other : Transform;
function Update () {
if(mainCamera.localRotation.y < other.localRotation.y){
 mainCamera.localRotation.y = other.localRotation.y;
}
if(mainCamera.localRotation.y > other.localRotation.y){
 mainCamera.localRotation.y = other.localRotation.y;
}
}