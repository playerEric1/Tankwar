#pragma strict
var Other : Transform;
var Blood = 100;
var explosionPrefab : Transform;
var explosionPrefab2 : Transform;
var FirePoint : Transform;
var FirePoint2 : Transform;
var FirePoint3 : Transform;

function Update (){
  if(Blood < 0){
  	Instantiate(explosionPrefab, FirePoint.transform.position,FirePoint.transform.rotation);
 	Instantiate(explosionPrefab2, FirePoint2.transform.position,FirePoint.transform.rotation); 
  	Instantiate(explosionPrefab, FirePoint3.transform.position,FirePoint.transform.rotation);
  	Blood = 1000;
  	gameObject.active = false;
 }
}
function OnTriggerEnter (Other : Collider) {
  Blood = Blood - 25;
}