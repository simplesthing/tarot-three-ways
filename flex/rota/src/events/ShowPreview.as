package events
{
	import flash.events.Event;
	
	public class ShowPreview extends Event
		
	{
		
		public var cardInfo:Object;
		
		public function ShowPreview(type:String, cardInfo:Object)
		{
			super(type);
			this.cardInfo = cardInfo;
		}
		
		override public function clone():Event
		{
			return new ShowPreview(type, cardInfo);
		}
		
	}
}