package {
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.geom.Point;
	import flash.utils.Timer;
	import flash.display.MovieClip;

	public class Map {
		public var B:int;
		public var L:int;
		public var R:int;
		public var T:int;
		private var maps:Array=[[1,1,1,1,1,1],
								[1,1,1,1,1,1],
								[1,1,1,1,1,1],
								[1,1,1,1,1,1],
								[1,1,1,1,1,1],
								[1,1,1,1,1,1]];



		public var nodes:Array=[];

		public function Map(_parent:Object) {

			for(var i:int=0;i<maps.length;i++){
				nodes[i]=[];
				for(var j:int=0;j<maps[i].length;j++){
					if(maps[i][j]==1){

						var map:MovieClip=new Map1();
						_parent.addChild(map);
						
						map.x=50*j+(j*1)+50;
						map.y=50*i+(i*1)+50;
						
						map.txt.text=map.x+","+map.y;

						var node:Node=new Node(map,map.x,map.y,0,j,i);
						nodes[i][j]=node;
					}
				}
			}
		}

		/**
		 *  该方法为配合显示地图用，实际不需要；
		 */
		public function getBlockElement(no_X:uint, no_Y:uint):Node {
			if (no_X > R || no_X < L || no_Y < T || no_Y > B) {
				return null;
			}
			var node:Node=maps[no_X][no_Y] as Node;
			if (node) {
				return node;
			}
			return null;
		}

		public function getElement(no_X:uint, no_Y:uint):Node {
			if (no_X > R || no_X < L || no_Y < T || no_Y > B) {
				return null;
			}
			var node:Node=maps[no_X][no_Y] as Node;
			if (!node) {
				return node;
			}
			return null;
		}
	}
}