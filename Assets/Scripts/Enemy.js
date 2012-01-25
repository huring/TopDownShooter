#pragma strict
var enemySpeed:int;
var enemyHealth:int;
var sfx:AudioClip;
var prefabExplosion:Transform;

// how high/low our waves our
var waveMagnitude:float = 5.0;

// how frequently our waves cycle
var waveSpeed:float = 2.0;

// counter to keep track of the sine wave
private var wave:float = 0.0;
// our original y value, used to calculate sine wave movement

private var originalX:float;

function Awake() {

	originalX = transform.position.x;
	wave = Random.Range(0, Mathf.PI*2*10)*0.1;

}

function Update () {
	transform.Translate(Vector3.down * enemySpeed * Time.deltaTime);
	transform.Rotate(Vector3.up);

	transform.position.x = originalX + Mathf.Sin(wave) * waveMagnitude;
	// increase our wave counter object by "waveSpeed"
	wave += Time.deltaTime * waveSpeed;


}

function OnDamage() {
	Debug.Log("Message recieved from Bullet");
	
	audio.PlayOneShot(sfx);
	Instantiate(prefabExplosion, transform.position, Quaternion.identity); 
	Destroy(gameObject);
}

function OnTriggerEnter(other:Collider) {
	
	if (other.gameObject.CompareTag("Player")) {
	
		other.gameObject.SendMessage("OnDamage", null);
	
	}
	
}