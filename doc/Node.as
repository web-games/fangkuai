package  {
	import flash.display.MovieClip;
	
	public class Node {
		
		public var item:MovieClip;
		public var nx:int;
		public var ny:int;
		
		private var state:int;
		
		public var horizontal:int;
		public var vertical:int;
		public function Node(_mc,_nx,_ny,_state,h,v) {
			// constructor code
			this.item=_mc;
			this.nx=_nx;
			this.ny=_ny;
			this._state=_state;
			this.horizontal=h;
			this.vertical=v;
		}
		public function get _state():int {
			return state;
	   }
	   public function set _state(s:int):void {
			state=s;
	   }	

	}
	
}
