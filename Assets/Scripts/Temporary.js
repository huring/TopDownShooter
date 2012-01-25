#pragma strict
var life:float;

function Update () {

	// Setup objects with a set lifespan, then kill them.
	life -= Time.deltaTime;
	
	if (life <= 0.0)
		Destroy(gameObject);

}