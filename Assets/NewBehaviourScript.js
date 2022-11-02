#pragma strict
var maxSpeed = -30;
var camera0 : Camera;
var camera1 : Camera;
var camera2 : Camera;
var Speed = 0;

 function Update(){
   if(Speed < 0){
   Speed = Speed + 1;
   transform.Translate(Vector3.forward * Time.deltaTime * Speed);
   }
    if(Input.GetKey(KeyCode.W)){
    if(Speed > maxSpeed){
    Speed = Speed -2;
   	transform.Translate(Vector3.forward * Time.deltaTime * Speed);
   	}
   	if(Speed < maxSpeed){
   	transform.Translate(Vector3.forward * Time.deltaTime * maxSpeed);
   	}
  }
  
  if(Input.GetKey(KeyCode.S)){	
    transform.Translate(Vector3.forward * Time.deltaTime * -maxSpeed/2);
     if(Input.GetKey(KeyCode.A)){
    transform.Rotate(Vector3.up *Time.deltaTime * 30);
 
  }
   if(Input.GetKey(KeyCode.D))
  {
  	transform.Rotate(Vector3.up *Time.deltaTime * -30);
 
  }
  }
   if(Input.GetKey(KeyCode.A)){
    transform.Rotate(Vector3.up *Time.deltaTime * -20);
 
  }
   if(Input.GetKey(KeyCode.D))
  {
  	transform.Rotate(Vector3.up *Time.deltaTime * 20);
 
  }
    if(Input.GetKeyDown(KeyCode.LeftShift)){
     camera0.enabled = false;
     camera1.enabled = true;
         camera2.enabled = false;
     }
    if(Input.GetKeyDown(KeyCode.LeftControl)){
     camera1.enabled = false;
     camera0.enabled = true;
         camera2.enabled = false;
     }
      if(Input.GetKeyDown(KeyCode.M)){
     camera0.enabled = false;
     camera1.enabled = false;
         camera2.enabled = true;
     }
}

