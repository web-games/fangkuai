package  {
	import flash.display.MovieClip;
	import flash.geom.Point;
	import flash.geom.ColorTransform;
	
	public class PStar {
		
		private var nodes:Array;
		private var equalNodes:Array=[];
		public function PStar(ns:Array) {
			// constructor code
			nodes=ns;
		}
		/*
		*查找可否放置方格子
		**/
		public function find(mc:MovieClip):void{
			var n:int;
			var pNodes=[];
			for(n=0;n<mc.numChildren;n++){
				var childrenMc:MovieClip=mc.getChildAt(n) as MovieClip;
				var point:Point=new Point(mc.x+childrenMc.x,mc.y+childrenMc.y);
				childrenMc.txt.text=childrenMc.name+","+point.x+","+point.y;
				
				for(var i:int=0;i<nodes.length;i++){
					for(var j:int=0;j<nodes[i].length;j++){
						var node:Node=nodes[i][j] as Node;
						if(node._state==1)continue;
						if( Math.abs(node.nx-point.x)<=25 && Math.abs(node.ny-point.y)<=25){
							//trace(Math.abs(node.nx-point.x),Math.abs(node.ny-point.y));
							pNodes.push(node);
						}
						
					}
				}
			}
			
			//trace(pNodes.length,mc.numChildren);
			//trace("\n");
			if(pNodes.length>=mc.numChildren){
				
				restoreNode();
				equalNodes=pNodes;
				for(n=0;n<equalNodes.length;n++){
					var mycolorTransform:ColorTransform=new ColorTransform();
					mycolorTransform.color=0xffff00;
					equalNodes[n].item.chil.transform.colorTransform=mycolorTransform;
				}
			}else if(equalNodes.length>=0){
				restoreNode();
			}
		}
		public function judge():Object{
			if(equalNodes.length>0){
				for(var n=0;n<equalNodes.length;n++){
					var mycolorTransform:ColorTransform=new ColorTransform();
					mycolorTransform.color=0x898BFE;
					equalNodes[n].item.chil.transform.colorTransform=mycolorTransform;
					equalNodes[n]._state=1
				}
				equalNodes=[];
				return true;
			}
			return false;
		}
		private function restoreNode(){
			if(equalNodes.length>=0){
				for(var n=0;n<equalNodes.length;n++){
					var mycolorTransform:ColorTransform=new ColorTransform();
					mycolorTransform.color=0x4D4D4B;
					equalNodes[n].item.chil.transform.colorTransform=mycolorTransform;
				}
				equalNodes=[];
			}
		}
	}
	
}
