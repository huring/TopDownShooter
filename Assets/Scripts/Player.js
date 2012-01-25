#pragma strict
var playerSpeed:int;
var playerLives:int;
var prefabBullet:Transform;
var prefabExplosion:Transform;

static var playerScore:int;


function Update () {

	var xMove:float = Input.GetAxis("Horizontal") * Time.deltaTime * playerSpeed;
	transform.Translate(Vector3(xMove, 0, 0));
	
	transform.Rotate(Vector3.right);
	
	transform.position.x = Mathf.Clamp(transform.position.x, -8, 8);

	if (Input.GetButtonDown("Shoot"))
		Instantiate(prefabBullet, transform.position, Quaternion.Euler(0, 0, 0));

}

function OnDamage() {

	if (playerLives > 0) {
		playerLives--;
		playerScore--;
	} else {
		Instantiate(prefabExplosion, transform.position, Quaternion.identity); 
		Destroy(gameObject);
	}
	// ;

}

function OnScore() {
	
	playerScore++;

}

function OnGUI() {
	
	GUI.Label(Rect(10, 10, 200, 50), "Score: " + playerScore);
	GUI.Label(Rect(10, 30, 200, 50), "Lives: " + playerLives);

}