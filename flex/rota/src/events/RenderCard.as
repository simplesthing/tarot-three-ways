package events
{
	import flash.events.Event;
	
	public class RenderCard extends Event
	{
		public var cardInfo:Object;
		
		public function RenderCard(type:String, cardInfo:Object)
		{
			super(type, cardInfo);
			this.cardInfo = cardInfo;
		}
	}
}