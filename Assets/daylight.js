#pragma strict

function Start () {

}

function Update () {
transform.Rotate(Vector3.right *Time.deltaTime * -1);
}