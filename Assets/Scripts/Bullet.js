#pragma strict
var bulletSpeed:int;

function Update () {
	transform.Translate(Vector3.up * bulletSpeed * Time.deltaTime);
}

function OnTriggerEnter(other:Collider) {

	if (other.gameObject.CompareTag("Enemy"))
	{
		other.gameObject.SendMessage("OnDamage", null);
		
		// Update with proper messaging
		GameObject.FindGameObjectWithTag("Player").SendMessage("OnScore");
		
		Destroy(gameObject);
		
	}

}