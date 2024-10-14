package  {
	import flash.display.MovieClip;
	import flash.geom.ColorTransform;
	
	public class Count {
		
		private var nodes:Array;
		private var heng:int;
		private var shu:int;
		private var eliminate:Array=[];
		public function Count(ns) {
			// constructor code
			nodes=ns;
			if(ns.length>0)heng=ns[0].length;
			shu=ns.length;
		}
		public function find():void{
			for(var i:int=0;i<nodes.length;i++){
				var h=0;
				var v=0;
				var a:Array=[];
				for(var j:int=0;j<nodes[i].length;j++){
					var node:Node=nodes[i][j] as Node;
					if(node._state==1)
						h++;
					
					node=nodes[j][i] as Node;
					if(node._state==1){
						v++;
						a.push(node);
					}						
				}
				//trace(j,nodes[i].length);
				if(h==heng)
					eliminate.push(nodes[i]);
				
				if(v==shu)
					eliminate.push(a);
			}
			if(eliminate.length>0){
				for(var n=0;n<eliminate.length;n++){
					resetItem(eliminate[n]);
				}
				eliminate=[];
			}
		}
		private function resetItem(arr:Array):void{
			for(var j=0;j<arr.length;j++){
				(arr[j] as Node)._state=0;
				var item:MovieClip=arr[j].item as MovieClip;
				var mycolorTransform:ColorTransform=new ColorTransform();
				mycolorTransform.color=0x4D4D4B;
				item.chil.transform.colorTransform=mycolorTransform;
			}
		}

	}
	
}
