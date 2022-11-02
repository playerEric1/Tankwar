#pragma strict
var FirePoint : Transform;
var Bullet : Rigidbody;
var BulletCnt : int = 30;
var BulletSpeed=400;
var myStyle:GUIStyle;
private var CurrBullet : int;
var PutVnt : int = 800;

function Start(){
	CurrBullet=BulletCnt;
}

function Update () {

    if(PutVnt>0){
    PutVnt  = PutVnt  - 0.003;
    }
	if (FirePoint==null||Bullet==null){
			return;
	}
	if(Input.GetMouseButtonDown(0)){
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

function OnGUI()
{
	GUI.Label(Rect(30,30,60,30),"Bullet:"+CurrBullet+"    装填剩余"+PutVnt/10+"秒",myStyle);
}