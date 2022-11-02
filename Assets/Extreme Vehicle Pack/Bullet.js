
function Update () {
}
function OnCollisionStay(collisionInfo:Collision){
	yield WaitForSeconds(0.1);
	Destroy(gameObject);
}