package  {
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	import flash.geom.Rectangle;
	import flash.geom.Point;
	import flash.geom.ColorTransform;
	
	public class Main extends MovieClip{
		
		
		private var map:Map;
		private var pstar:PStar;
		private var count:Count;
		private var itemArr:Array=[
								[[1,1,1],
								 [0,0,1]],
		
								[[1,1,1],
								 [1,0,0]],
		
								[[1,0],
								 [1,0],
								 [1,1]],
		
								[[1,1,0],
								 [0,1,1]],
		
								[[0,1],
								 [1,1],
								 [1,0]],
								
								[[1,1,1],
								 [0,1,0]],
								 
								[[0,1,0],
								 [1,1,1]],
								 
								[[1,1,1,1]],
								 
								[[1],
								 [1],
								 [1],
								 [1]]
							];
		private var itemInfoArr:Array=[{"_x":750,"_y":100,"_color":0x898BFE,"index":0},
								{"_x":750,"_y":350,"_color":0x898BFE,"index":1},
								{"_x":750,"_y":600,"_color":0x898BFE,"index":2}];
		
		public function Main() {
			// constructor code
			
			map=new Map(this);
			
			pstar=new PStar(map.nodes);
			
			count=new Count(map.nodes);
										
			for(var i:int=0;i<3;i++){
				var r:int=Math.floor(Math.random()*itemArr.length);
				creatItem(itemArr[r],itemInfoArr[i]);
			}
		}
		private function creatItem(arr:Array,info:Object):void{
			var sp:MovieClip=new MovieClip();
			sp.addEventListener(MouseEvent.MOUSE_DOWN,onmousedown,false);
			sp["gridNum"]=0;
			sp["itemArr"]=arr;
			var n:int=0;
			for(var i:int=0;i<arr.length;i++){
				for(var j:int=0;j<arr[0].length;j++){
					if(arr[i][j]==1){
						var item:MovieClip=new Map2();
						sp.addChild(item);
						item.x=50*j+(j*1);
						item.y=50*i+(i*1);
						item.txt2.text=++n;
						item.name=n.toString();
						sp["gridNum"]+=1;
					}
				}
			}
			this.addChild(sp);
			sp["info"]=info;
			sp.x=info._x;
			sp.y=info._y;
		}
		private function onmousedown(event):void{
			var mc=event.currentTarget;
			event.currentTarget.startDrag(false,new Rectangle(0,0,1024,768));
			event.currentTarget.addEventListener(MouseEvent.MOUSE_UP,onmouseup);
			event.currentTarget.addEventListener(MouseEvent.MOUSE_MOVE,onmousemove);
		}
		private function onmouseup(event):void{
			var ct:MovieClip=event.currentTarget as MovieClip;
			ct.stopDrag();
			ct.removeEventListener(MouseEvent.MOUSE_UP,onmouseup);
			ct.removeEventListener(MouseEvent.MOUSE_MOVE,onmousemove);
			var bo=pstar.judge();
			trace(bo);
			if(bo){
				this.removeChild(ct);
				var r:int=Math.floor(Math.random()*itemArr.length);
				creatItem(itemArr[r],itemInfoArr[ct["info"]["index"]]);
				count.find();
			}else{
				ct.x=ct["info"]["_x"];
				ct.y=ct["info"]["_y"];
			}
		}
		private function onmousemove(event):void{
			pstar.find(event.currentTarget as MovieClip);
	
		}

	}
	
}











