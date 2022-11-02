private var menuShow:boolean;
function Start(){
	DontDestroyOnLoad(this);
	menuShow=true;
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)){
		menuShow=true;
	}
}
function OnGUI(){
	if(menuShow==false){
		return;
	}
	if(GUI.Button(Rect(Screen.width/2-30,Screen.height/2-50,60,30),"Scene 1")){
		print("You click the Scene 1 button!");
		Application.LoadLevel(1);
		menuShow=false;
	}
	else if(GUI.Button(Rect(Screen.width/2-30,Screen.height/2-10,60,30),"Scene 2")){
		print("You click the Scene 2 button!");
		Application.LoadLevel(2);
		menuShow=false;
	}
	else if(GUI.Button(Rect(Screen.width/2-30,Screen.height/2+30,60,30),"Quit")){
		print("You click the Quit button!");
		Application.Quit();
	}
}