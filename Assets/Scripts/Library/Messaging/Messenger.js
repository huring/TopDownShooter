#pragma strict
#pragma implicit
#pragma downcast

@script AddComponentMenu("Library/Messenger")

/*
* Script to manage updating components when certain game events happen - for 
* instance when cars are spawned, deleted, etc
*/

var listeners:Hashtable = new Hashtable();

// keep a record of message types sent -- key is type string, value is int
private var messageTypeCount:Hashtable = new Hashtable();

static var instance:Messenger;
static var use:Messenger;

function Awake()
{
	// make the instance available if one isn't already
	if(instance == null)
	{
		instance = this;
		use = this;
	}
	else
	{
		Destroy(gameObject);
	}
	
	DontDestroyOnLoad(this);
}

/**
* Adds a listener for a particular type of message
*/
function Listen(listenerType:String, go:GameObject)
{	
	// if there's no array for this tracking category, make a new one
	if(listeners[listenerType] == null)
	{
		listeners[listenerType] = new ArrayList();
	}
	
	var list:ArrayList = listeners[listenerType];
	
	// only add to the array if it isn't already being tracked
	if(!list.Contains(go))
	{
		list.Add(go);
	}
}

/**
* Register implicitly with this instead of gameObject
*/
function Listen(listenerType:String, component:Component)
{
	Listen(listenerType, component.gameObject);
}

/**
* Removes a listener for the specified type of message
*/
function StopListen(listenerType:String, go:GameObject)
{
	var list:ArrayList = listeners[listenerType];
	
	if(list != null)
	{
		list.Remove(go);
	}
}

/**
* Sends a message (calls the function denoted by methodName using value value) 
* to all registered listeners for the given message type
*/
function Send(msg:Message)
{		
	// get our list (will be null if unknown type or no listeners registered)
	var list:ArrayList = listeners[msg.listenerType];	
	
	if(list)
	{
		for(var i:int = 0; i < list.Count; i++)
		{
			var listener:GameObject = list[i];
			
			if(listener)
				listener.SendMessage(msg.functionName, msg, SendMessageOptions.DontRequireReceiver);
			else
			{
				// scrub nulls
				list.RemoveAt(i);
				i--;
			}
		}
	}
}