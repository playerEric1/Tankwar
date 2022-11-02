#pragma strict
var explosionPrefab : Transform;

function OnCollisionEnter(collision : Collision) {
	// Rotate the object so that the y-axis faces along the normal of the surface
	//旋转物体，以便y轴方向沿着表面的法线
	var contact : ContactPoint = collision.contacts[0];
	var rot : Quaternion = Quaternion.FromToRotation(Vector3.up, contact.normal);
	var pos : Vector3 = contact.point;
	Instantiate(explosionPrefab, pos, rot);
	// Destroy the projectile
	//销毁物体
	Destroy (gameObject);
}