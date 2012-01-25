#pragma strict
var prefabToSpawn:Transform;
var spawnTime:float;
var randomSeed:float;

private var spawnTimer:float;

function Awake() {
	ResetSpawnTimer();
}

function Update () {

	if (spawnTimer > 0) {
	
		spawnTimer -= Time.deltaTime;
		
		// Spawn something
		if (spawnTimer <= 0.0) {
		
			spawnTimer = 0;
			Instantiate(prefabToSpawn, transform.position, Quaternion.identity);
			
			ResetSpawnTimer();
		
		}
	
	}

}

function ResetSpawnTimer() {

	// Init spawn timer with random seed
	spawnTimer = spawnTime + Random.Range(0, randomSeed*100)/100.0;

}