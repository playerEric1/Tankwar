using UnityEngine;
using System.Collections;

public class audio : MonoBehaviour {
	
	
	public AudioSource music;	
	public float musicVolume;	
	
	void Start() {
		musicVolume = 0.5F;	
	}
	void Update() {
		
		if (Input.GetMouseButtonDown(0))
			
			
		if (!music.isPlaying){
			
			music.Play();
		}
		
	}
}	
