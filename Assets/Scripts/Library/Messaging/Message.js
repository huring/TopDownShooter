#pragma strict
#pragma implicit
#pragma downcast

/*
* Base class for messages sent through the messenger
*/
class Message extends System.Object
{
	public var listenerType:String;
	public var functionName:String;
		
	function Message(type:String)
	{
		listenerType = type;
		
		// function name for MessageMyMessage becomes _MyMessage()
		functionName = "_" + typeof(this).ToString().Substring(7);
				
		// actually send the message
		if(Messenger.instance)
			Messenger.instance.Send(this);
	}
}