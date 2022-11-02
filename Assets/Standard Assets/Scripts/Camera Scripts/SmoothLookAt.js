var target : Transform;
var damping = 6.0;
var smooth = true;
var FirePoint : Transform;
var Bullet : Rigidbody;
var BulletCnt : int = 30;
var BulletSpeed=400;
private var CurrBullet : int;
var PutVnt : int = 800;

@script AddComponentMenu("Camera-Control/Smooth Look At")

function LateUpdate () {
if(PutVnt>0){
    PutVnt  = PutVnt  - 0.003;
    }
	if (FirePoint==null||Bullet==null){
			return;
	}
if(Vector3.Distance(target.position  , transform.position) < 1000){
	if (target) {
		if (smooth)
		{
			// Look at and dampen the rotation
			var rotation = Quaternion.LookRotation(-target.position + transform.position);
			transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
		    }
	    }
	    if(CurrBullet>0){
		     if(PutVnt == 0){
			var clone : Rigidbody;
			clone=Instantiate(Bullet,FirePoint.transform.position,FirePoint.transform.rotation);
			clone.velocity=transform.TransformDirection(Vector3.forward*BulletSpeed);	
			CurrBullet-=1;
			PutVnt = 80;
			}
		}
    }	
}

function Start () {
    CurrBullet=BulletCnt;
	// Make the rigid body not change rotation
   	if (GetComponent.<Rigidbody>())
		GetComponent.<Rigidbody>().freezeRotation = true;
}