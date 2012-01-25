// MESSAGESCOREPOINTS

// create a new object type for our message
// 'extends Message' is very important to include...
// otherwise this will just be any old object, not a message!
class MessageScorePoints extends Message
{
	// store the amount of points to be passed as a message
	var points:int;
	
	// this is a special function, called a "constructor"
	// it means you can say new MessageScorePoints(10)
	// basically its a function that gets called when you create an object
	// that's why it has the same name as the object type (see 'class MessageScorePoints' above?)
	// (very handy)
	function MessageScorePoints(points:int)
	{
		// assign the points passed into this function to our internal variable
		this.points = points;
		
		// the type of message that we are
		// this should match the type of message ("Score"), but be lower case
		// (this is just the naming convention that I use)
		// this has to come at the end of the function
		super("score");
	}
}