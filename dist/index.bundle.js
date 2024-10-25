(()=>{"use strict";var t,e={198:function(t,e){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(n){var o=t.call(this,n)||this;return e.NAME="SNAKE"+e.COUNT++,o.view.style.width="100%",document.body.prepend(o.view),o}return o(e,t),Object.defineProperty(e.prototype,"stageWidth",{get:function(){return this.screen.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"stageHeight",{get:function(){return this.screen.height},enumerable:!1,configurable:!0}),e.NAME="SNAKE",e.COUNT=0,e}(PIXI.Application);e.default=r},738:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.Facade,a=n(198),c=n(414),s=n(312),u=function(t){function e(e){var n=t.call(this,e)||this;return n._application=null,n}return r(e,t),e.getInstance=function(t){return null==t?null:(null==i.instanceMap[t]&&(i.instanceMap[t]=new e(t)),i.instanceMap[t])},e.prototype.initializeModel=function(){t.prototype.initializeModel.call(this)},e.prototype.initializeView=function(){t.prototype.initializeView.call(this)},e.prototype.initializeController=function(){t.prototype.initializeController.call(this),this.registerCommand(e.STARTUP,s.default)},e.prototype.startup=function(){var t=document.documentElement.clientWidth||document.body.clientWidth,n=document.documentElement.clientHeight||document.body.clientHeight,o=n>t?n/t*640:t/n*640;globalThis.__PIXI_APP__=this.application=new a.default({width:640,height:o,backgroundColor:1087931}),this.sendNotification(e.STARTUP,this.application),this.removeCommand(e.STARTUP),this.sendNotification(c.default.TO_LOADING,{from:null})},e.prototype.destroy=function(){this.application&&(this.application.destroy(!0),this.application=null),window.TweenMax.killAll()},Object.defineProperty(e.prototype,"application",{get:function(){return this._application},set:function(t){this._application=t},enumerable:!1,configurable:!0}),e.STARTUP="startup",e.instance=null,e}(i);e.default=u},25:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.SimpleCommand,a=n(414),c=n(330),s=n(977),u=function(t){function e(){return t.call(this)||this}return r(e,t),e.prototype.execute=function(t){var n=this;console.log("SceneCommand notification:",t);var o=t.getName(),r=(t.getBody(),this.facade.retrieveProxy(c.default.NAME));switch(o){case e.GAME_START:$(document).on("keydown",(function(t){switch(t.keyCode){case 32:r.pause=!r.pause;break;case 37:n.sendNotification(e.BLOCK_MOVE_LEFT);break;case 38:n.sendNotification(e.BLOCK_ROTATE);break;case 39:n.sendNotification(e.BLOCK_MOVE_RIGHT);break;case 40:n.sendNotification(e.BLOCK_MOVE_END)}})),r.resetGameData();var i=setInterval((function(){r.pause||n.sendNotification(e.BLOCK_MOVE_DOWN)}),1e3);r.intervalId=i;break;case e.GAME_OVER:$(document).off("keydown"),r.intervalId&&(clearInterval(r.intervalId),r.intervalId=null);var u=this.facade.retrieveMediator(s.default.NAME).gameScene;this.sendNotification(a.default.TO_END,{from:u})}},e.GAME_START="game_start",e.GAME_OVER="game_over",e.BLOCK_MOVE_DOWN="block_move_down",e.BLOCK_MOVE_LEFT="block_move_left",e.BLOCK_MOVE_RIGHT="block_move_right",e.BLOCK_MOVE_END="block_move_end",e.BLOCK_ROTATE="block_rotate",e}(i);e.default=u},414:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.SimpleCommand,a=n(158),c=n(232),s=n(316),u=n(977),l=n(588),f=n(330),p=n(25),d=function(t){function e(){return t.call(this)||this}return r(e,t),e.prototype.execute=function(t){console.log("SceneCommand notification:",t);var n=this.facade.application,o=t.getName(),r=t.getBody().from;switch(r&&r instanceof a.default&&(r.destroy(),r.removeAllChildren(),r.removeThis()),o){case e.TO_LOADING:var i=this.facade.retrieveMediator(c.default.NAME).loadingScene;n.stage.addChild(i),i.init();break;case e.TO_START:var d=this.facade.retrieveMediator(s.default.NAME).startScene;n.stage.addChild(d),d.sceneIn(),d.init(),PIXI.sound.stopAll(),PIXI.sound.play("worldscenebgm",{loop:!0});break;case e.TO_GAME:var h=this.facade.retrieveProxy(f.default.NAME),_=this.facade.retrieveMediator(u.default.NAME).gameScene;n.stage.addChild(_),_.init(h),this.sendNotification(p.default.GAME_START),PIXI.sound.stopAll(),PIXI.sound.play("gamescenebgm",{loop:!0});break;case e.TO_END:var y=this.facade.retrieveMediator(l.default.NAME).endScene;n.stage.addChild(y),y.init(),PIXI.sound.stop("gamescenebgm"),PIXI.sound.play("worldscenebgm",{loop:!0})}},e.TO_LOADING="to_loading",e.TO_START="to_start",e.TO_GAME="to_game",e.TO_END="to_end",e}(i);e.default=d},61:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.SimpleCommand,a=n(414),c=n(25),s=function(t){function e(){return t.call(this)||this}return r(e,t),e.prototype.execute=function(){this.facade.registerCommand(a.default.TO_LOADING,a.default),this.facade.registerCommand(a.default.TO_START,a.default),this.facade.registerCommand(a.default.TO_GAME,a.default),this.facade.registerCommand(a.default.TO_END,a.default),this.facade.registerCommand(c.default.GAME_START,c.default),this.facade.registerCommand(c.default.GAME_OVER,c.default)},e}(i);e.default=s},377:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.SimpleCommand,a=n(330),c=function(t){function e(){return t.call(this)||this}return r(e,t),e.prototype.execute=function(t){var e=t.getBody();this.facade.registerProxy(new a.default(e))},e}(i);e.default=c},312:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.MacroCommand,a=n(377),c=n(778),s=n(61),u=function(t){function e(){return t.call(this)||this}return r(e,t),e.prototype.initializeMacroCommand=function(){this.addSubCommand(a.default),this.addSubCommand(c.default),this.addSubCommand(s.default)},e}(i);e.default=u},778:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.SimpleCommand,a=n(189),c=n(232),s=n(819),u=n(316),l=n(400),f=n(977),p=n(944),d=n(588),h=function(t){function e(){return t.call(this)||this}return r(e,t),e.prototype.execute=function(t){var e=t.getBody(),n=new a.default(e);this.facade.registerMediator(new c.default(n));var o=new s.default(e);this.facade.registerMediator(new u.default(o));var r=new l.default(e);this.facade.registerMediator(new f.default(r));var i=new p.default(e);this.facade.registerMediator(new d.default(i))},e}(i);e.default=h},588:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.Mediator,a=n(944),c=n(414),s=function(t){function e(n){var o=t.call(this,e.NAME,n)||this;return o.endScene.on(a.default.CLICK_AGAIN,(function(){o.sendNotification(c.default.TO_GAME,{from:o.endScene})})),o.endScene.on(a.default.CLICK_RESTART,(function(){o.sendNotification(c.default.TO_START,{from:o.endScene})})),o}return r(e,t),e.prototype.listNotificationInterests=function(){return[]},e.prototype.handleNotification=function(t){t.getName()},Object.defineProperty(e.prototype,"endScene",{get:function(){return this.viewComponent},enumerable:!1,configurable:!0}),e.NAME="end_scene_mediator",e}(i);e.default=s},977:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.Mediator,a=n(400),c=n(25),s=n(961),u=function(t){function e(n){var o=t.call(this,e.NAME,n)||this;return o.gameScene.on(a.default.CLICK_LEFT,(function(){return o.sendNotification(c.default.BLOCK_MOVE_LEFT)})),o.gameScene.on(a.default.CLICK_RIGHT,(function(){return o.sendNotification(c.default.BLOCK_MOVE_RIGHT)})),o.gameScene.on(a.default.CLICK_UP,(function(){return o.sendNotification(c.default.BLOCK_ROTATE)})),o.gameScene.on(a.default.CLICK_DOWN,(function(){return o.sendNotification(c.default.BLOCK_MOVE_END)})),o}return r(e,t),e.prototype.listNotificationInterests=function(){return[c.default.BLOCK_MOVE_DOWN,c.default.BLOCK_MOVE_LEFT,c.default.BLOCK_MOVE_RIGHT,c.default.BLOCK_MOVE_END,c.default.BLOCK_ROTATE]},e.prototype.handleNotification=function(t){console.log("GameSceneMediator notification:",t);var e=t.getName();switch(t.getBody(),t.getType(),e){case c.default.BLOCK_MOVE_DOWN:this.gameScene.block.moveDown()||this.randomCreateBlock(),this.checkScore(),this.checkOver();break;case c.default.BLOCK_MOVE_LEFT:this.gameScene.block.moveLeft();break;case c.default.BLOCK_MOVE_RIGHT:this.gameScene.block.moveRight();break;case c.default.BLOCK_MOVE_END:this.gameScene.block.moveEnd();break;case c.default.BLOCK_ROTATE:this.gameScene.block.rotate()}},e.prototype.randomCreateBlock=function(){var t=this;this.gameScene.removeBlock(),this.gameScene.block.mapGridArr.forEach((function(e){var n=e[0],o=e[1];t.gameScene.map.setMapGridValue(n,o,1)})),this.gameScene.randomBlock()},e.prototype.checkScore=function(){for(var t=0;t<this.gameScene.map.mapData.length;t++)this.gameScene.map.mapData[t].every((function(t){return 0!==t}))&&(console.log("第".concat(t,"行可以消除了")),this.gameScene.map.mapData.splice(t,1),this.gameScene.map.mapData.unshift(new Array(s.MapConfig.cols).fill(0)),this.gameScene.map.renderGrid())},e.prototype.checkOver=function(){this.gameScene.map.mapData[0].some((function(t){return 0!==t}))&&(console.log("游戏结束"),this.gameScene.removeBlock(),this.gameScene.map.resetGridData(),this.sendNotification(c.default.GAME_OVER))},Object.defineProperty(e.prototype,"gameScene",{get:function(){return this.viewComponent},enumerable:!1,configurable:!0}),e.NAME="game_scene_mediator",e}(i);e.default=u},232:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.Mediator,a=n(189),c=n(414),s=function(t){function e(n){var o=t.call(this,e.NAME,n)||this;return o.loadingScene.on("init_complete",o.initComplete,o),o.loadingScene.on(a.default.CLICK_CONTINUE,(function(){o.sendNotification(c.default.TO_START,{from:o.loadingScene})}),o),o}return r(e,t),e.prototype.initComplete=function(){var t=this,e=new PIXI.Loader;e.add(["./resources/images/sp_start_background.jpg","./resources/images/sp_end_background.jpg","./resources/images/sp_game_background.jpg"]),e.once("complete",(function(){t.loadingScene.setLoadingText("加载完成，点击任意地方继续"),t.loadingScene.loading=!1})),e.on("progress",(function(e){t.loadingScene.setLoadingProgress(e.progress)})),e.load(),PIXI.sound.add({worldscenebgm:"./resources/music/worldscenebgm.mp3",gamescenebgm:"./resources/music/gamescenebgm.mp3",drop:"./resources/music/drop.mp3",swap:"./resources/music/swap.mp3",click:"./resources/music/click.mp3"})},Object.defineProperty(e.prototype,"loadingScene",{get:function(){return this.viewComponent},enumerable:!1,configurable:!0}),e.NAME="load_scene_mediator",e}(i);e.default=s},316:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.Mediator,a=n(819),c=n(414),s=function(t){function e(n){var o=t.call(this,e.NAME,n)||this;return o.startScene.on(a.default.CLICK_START,(function(){o.sendNotification(c.default.TO_GAME,{from:o.startScene})})),o}return r(e,t),e.prototype.listNotificationInterests=function(){return[]},e.prototype.handleNotification=function(t){t.getName()},Object.defineProperty(e.prototype,"startScene",{get:function(){return this.viewComponent},enumerable:!1,configurable:!0}),e.NAME="start_scene_mediator",e}(i);e.default=s},69:function(t,e){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=PIXI.Container,i=PIXI.Text,a=PIXI.Graphics,c=function(t){function e(e,n){void 0===e&&(e=""),void 0===n&&(n={fontSize:32,color:16777215,bgColor:4423155});var o=t.call(this)||this,r=new a;o.addChild(r);var c=n.fontSize||32,s=n.color||16777215,u=new i(e,{fill:s,fontSize:c});u.anchor.set(.5,.5),o.addChild(u);var l=u.width+40,f=u.height+20,p=n.bgColor||16711680;return r.beginFill(p),r.drawRoundedRect(-l/2,-f/2,l,f,8),r.endFill(),o.interactive=!0,o.on("pointerdown",(function(){PIXI.sound.play("click")})),o}return o(e,t),e}(r);e.default=c},158:function(t,e){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(e){var n=t.call(this)||this;return n.game=null,n.stageWidth=0,n.stageHeight=0,n.game=e,n.stageWidth=e.stageWidth,n.stageHeight=e.stageHeight,n}return o(e,t),e.prototype.init=function(t){},e.prototype.destroy=function(){},e.prototype.removeAllChildren=function(t){void 0===t&&(t=this);var e=t.children;if(e&&e.length>0)for(var n=e.length-1;n>=0;n--){var o=e[n];this.removeAllChildren(o),o.parent&&o.parent.removeChild(o)}},e.prototype.removeThis=function(){this.parent&&this.parent.removeChild(this)},e}(PIXI.Container);e.default=r},944:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(158),a=n(69),c=PIXI.Sprite,s=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.init=function(){var t=this;this.addChild(c.from("./resources/images/sp_end_background.jpg"));var n=new a.default("再来一次");n.x=this.stageWidth/2,n.y=this.stageHeight/2,n.interactive=!0,n.on("pointerdown",(function(){return t.emit(e.CLICK_AGAIN)})),this.addChild(n);var o=new a.default("重新开始");o.x=this.stageWidth/2,o.y=this.stageHeight/2+110,o.interactive=!0,o.on("pointerdown",(function(){return t.emit(e.CLICK_RESTART)})),this.addChild(o)},e.NAME="start_scene",e.CLICK_AGAIN="click_again",e.CLICK_RESTART="click_restart",e}(i.default);e.default=s},332:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=PIXI.Container,a=PIXI.Graphics,c=n(961),s=n(929),u=function(t){function e(e){var n=t.call(this)||this;n.map=null,n.type=null,n.status=0,n.statusCount=0,n.row=null,n.col=null,n.map=e;var o=["S","Z","J","L","T","O","I"],r=o[Math.floor(Math.random()*o.length)],i=s.BlockConfig[r],a=Math.floor(Math.random()*i.length);return n.type=i,n.status=a,n.statusCount=i.length,n.row=0,n.col=3,n.x=n.col*c.MapConfig.gridWidth,n.y=0,n.renderBlock(),n}return r(e,t),e.prototype.renderBlock=function(){for(;this.children.length;)this.removeChildAt(0);for(var t=0;t<this.statusArr.length;t++)for(var e=0;e<this.statusArr[t].length;e++)if(0!==this.statusArr[t][e]){var n=e*c.MapConfig.gridWidth,o=t*c.MapConfig.gridHeight,r=new a;r.lineStyle(2,16706423,1),r.beginFill(16711680),r.drawRect(0,0,c.MapConfig.gridWidth,c.MapConfig.gridHeight),r.endFill(),r.x=n,r.y=o,this.addChild(r)}},e.prototype.moveDown=function(){return!!this.check(this.row+1,this.col)&&(this.row++,this.y=this.row*c.MapConfig.gridHeight,!0)},e.prototype.moveLeft=function(){this.check(this.row,this.col-1)&&(this.col--,this.x=this.col*c.MapConfig.gridWidth)},e.prototype.moveRight=function(){this.check(this.row,this.col+1)&&(this.col++,this.x=this.col*c.MapConfig.gridWidth)},e.prototype.moveEnd=function(){for(var t=this.row;this.check(this.row+1,this.col);)this.row++;this.y=this.row*c.MapConfig.gridHeight,t!==this.row&&PIXI.sound.play("drop")},e.prototype.rotate=function(){var t=this.status;this.status++,this.status>this.statusCount-1&&(this.status=0),this.check(this.row,this.col)||(this.status=t),t!==this.status&&PIXI.sound.play("swap"),this.renderBlock()},e.prototype.check=function(t,e){for(var n,o=this.map.mapData,r=0;r<this.statusArr.length;r++)for(var i=0;i<this.statusArr[r].length;i++){var a=t+r,c=e+i;if(0!==this.statusArr[r][i]&&0!==(null===(n=o[a])||void 0===n?void 0:n[c]))return!1}return!0},Object.defineProperty(e.prototype,"typeArr",{get:function(){return this.type},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"statusArr",{get:function(){return this.type[this.status]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mapGridArr",{get:function(){var t=this;return this.statusArr.map((function(e,n){return e.map((function(e,o){return e?[t.row+n,t.col+o]:null}))})).flat(1).filter((function(t){return t}))},enumerable:!1,configurable:!0}),e}(i);e.default=u},929:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BlockConfig=void 0,e.BlockConfig={S:[[[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]],[[0,1,1,0],[1,1,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]],Z:[[[1,1,0,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[1,1,0,0],[1,0,0,0],[0,0,0,0],[0,0,0,0]]],J:[[[0,1,0,0],[0,1,0,0],[1,1,0,0],[0,0,0,0]],[[1,1,0,0],[1,0,0,0],[1,0,0,0],[0,0,0,0]],[[1,0,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],[[1,1,1,0],[0,0,1,0],[0,0,0,0],[0,0,0,0]]],L:[[[1,0,0,0],[1,0,0,0],[1,1,0,0],[0,0,0,0]],[[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],[[1,1,1,0],[1,0,0,0],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]]],T:[[[1,1,1,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]]],O:[[[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]],I:[[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[1,1,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,0]]]}},400:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=PIXI.Container,a=PIXI.Sprite,c=n(158),s=n(331),u=n(332),l=n(961),f=n(567),p=function(t){function e(e){var n=t.call(this,e)||this;return n.map=null,n.block=null,n.rocker=null,n.gameContainer=null,n}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e),this.addChild(a.from("./resources/images/sp_game_background.jpg")),this.gameContainer=new i,this.gameContainer.x=(this.stageWidth-l.MapConfig.cols*l.MapConfig.gridWidth)/2,this.gameContainer.y=50,this.addChild(this.gameContainer),this.map=new f.default,this.gameContainer.addChild(this.map),this.rocker=new s.default,this.rocker.x=40,this.rocker.y=this.stageHeight-50,this.addChild(this.rocker),this.randomBlock()},e.prototype.removeBlock=function(){this.block&&this.gameContainer.removeChild(this.block)},e.prototype.randomBlock=function(){this.block=new u.default(this.map),this.gameContainer.addChild(this.block)},e.NAME="game_scene",e.CLICK_LEFT="click_left",e.CLICK_RIGHT="click_right",e.CLICK_UP="click_up",e.CLICK_DOWN="click_down",e}(c.default);e.default=p},263:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=PIXI.Container,a=PIXI.Graphics,c=n(961),s=function(t){function e(e,n,o){var r=t.call(this)||this,i=c.MapConfig.gridColor[o],s=new a;s.lineStyle(2,16706423,1),s.beginFill(i),s.drawRect(0,0,c.MapConfig.gridWidth,c.MapConfig.gridHeight),s.endFill(),r.addChild(s);var u=n*c.MapConfig.gridWidth,l=e*c.MapConfig.gridHeight;return r.x=u,r.y=l,r}return r(e,t),e.prototype.setValue=function(t){this.removeChildAt(0);var e=c.MapConfig.gridColor[t],n=new a;n.lineStyle(2,16706423,1),n.beginFill(e),n.drawRect(0,0,c.MapConfig.gridWidth,c.MapConfig.gridHeight),n.endFill(),this.addChildAt(n,0)},e}(i);e.default=s},567:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=PIXI.Container,a=n(961),c=n(263),s=function(t){function e(){var e=t.call(this)||this;e.width=null,e.mapData=null,a.MapConfig.rows;for(var n=a.MapConfig.cols,o=a.MapConfig.gridWidth,r=(a.MapConfig.gridHeight,a.MapConfig.mapData),i=r,s=0;s<i.length;s++)for(var u=i[s],l=0;l<u.length;l++){var f=u[l],p=new c.default(s,l,f);e.addChild(p),e["".concat(s,"_").concat(l)]=p}return e.width=n*o,e.mapData=r,e}return r(e,t),e.prototype.setMapGridValue=function(t,e,n){this.mapData[t][e]=n,this.renderGrid()},e.prototype.resetGridData=function(){for(var t=0;t<this.mapData.length;t++)for(var e=0;e<this.mapData[t].length;e++)this.mapData[t][e]=0,this["".concat(t,"_").concat(e)].setValue(0)},e.prototype.renderGrid=function(){for(var t=0;t<this.mapData.length;t++)for(var e=0;e<this.mapData[t].length;e++){var n=this.mapData[t][e];this["".concat(t,"_").concat(e)].setValue(n)}},e}(i);e.default=s},961:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MapConfig=void 0,e.MapConfig={rows:18,cols:10,gridWidth:48,gridHeight:48,mapData:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],gridColor:{0:"0xffffff",1:"0xe75166",2:"0xab5a2a",3:"0xeecb37",4:"0x8bc830",5:"0xd0d3d4",6:"0x7a6c6c",7:"0xf98d94",8:"0x4d27b0"}}},331:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=PIXI.Container,a=n(69),c=n(400),s=function(t){function e(){var e=t.call(this)||this,n=new a.default("左移",{bgColor:16711680});n.x=100,e.addChild(n),n.interactive=!0,n.on("pointerdown",(function(){return e.parent.emit(c.default.CLICK_LEFT)}));var o=new a.default("右移",{bgColor:16711680});o.x=220,e.addChild(o),o.interactive=!0,o.on("pointerdown",(function(){return e.parent.emit(c.default.CLICK_RIGHT)}));var r=new a.default("下落",{bgColor:16711680});r.x=340,e.addChild(r),r.interactive=!0,r.on("pointerdown",(function(){return e.parent.emit(c.default.CLICK_DOWN)}));var i=new a.default("变换",{bgColor:16711680});return i.x=460,e.addChild(i),i.interactive=!0,i.on("pointerdown",(function(){return e.parent.emit(c.default.CLICK_UP)})),e}return r(e,t),e}(i);e.default=s},189:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(158),a=PIXI.Text,c=PIXI.Container,s=PIXI.Graphics,u=function(t){function e(e){var n=t.call(this,e)||this;return n.loading=!0,n._loadingText=null,n._loadingBar=null,n}return r(e,t),e.prototype.init=function(){var t=this,n=new s;n.beginFill(3308539),n.drawRect(0,0,this.stageWidth,this.stageHeight),n.endFill(),n.x=0,n.y=0,this.addChild(n),n.interactive=!0,n.on("pointerdown",(function(){!t.loading&&t.emit(e.CLICK_CONTINUE)}));var o=new c;this.addChild(o),o.x=(this.stageWidth-300)/2,o.y=this.stageHeight-300;var r=new s;r.lineStyle(2,16777215,1),r.beginFill(3308539,0),r.drawRoundedRect(0,0,300,16,8),r.endFill(),o.addChild(r);var i=new PIXI.filters.GlowFilter({distance:16,outerStrength:2,innerStrength:0,color:16777215,quality:.1,knockout:!1});r.filters=[i];var u=new s;u.beginFill(16777215,1),u.drawRect(0,0,300,16),u.endFill(),o.addChild(u),u.x=-300,u.y=0;var l=new s;l.beginFill(16711680,1),l.drawRoundedRect(0,0,300,16,8),l.endFill(),o.addChild(l),u.mask=l,this._loadingBar=u;var f=new a("加载中...",{fill:"#FFFFFF"});o.addChild(f),f.anchor.set(.5,.5),f.x=150,f.y=-30,this._loadingText=f,this.emit("init_complete")},e.prototype.setLoadingProgress=function(t){window.TweenMax.to(this._loadingBar,.3,{x:t/100*300-300}),this.setLoadingText("".concat(parseInt(t),"%"))},e.prototype.setLoadingText=function(t){this._loadingText.text=t},e.NAME="loading_scene",e.CLICK_CONTINUE="click_continue",e}(i.default);e.default=u},819:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(158),a=n(69),c=PIXI.Sprite,s=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.init=function(){var t=this,e=c.from("./resources/images/sp_start_background.jpg");this.addChild(e);var n=new a.default("开始游戏");n.x=this.stageWidth/2,n.y=this.stageHeight/2,n.scale.x=n.scale.y=0,this.addChild(n),n.interactive=!0,n.on("pointerdown",(function(){t.sceneOut()})),window.TweenMax.to(n.scale,1,{x:1,y:1,ease:window.Elastic.easeOut,delay:.3})},e.prototype.sceneIn=function(){window.TweenMax.to(this,1,{alpha:1})},e.prototype.sceneOut=function(){var t=this;window.TweenMax.to(this,.3,{alpha:0,onComplete:function(){t.emit(e.CLICK_START)}})},e.NAME="start_scene",e.CLICK_START="click_start",e}(i.default);e.default=s},330:function(t,e){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(n){var o=t.call(this,e.NAME)||this;return o.pause=!1,o.game=null,o.intervalId=null,o.game=n,o}return o(e,t),e.prototype.resetGameData=function(){},e.NAME="game_proxy",e}(puremvc.Proxy);e.default=r}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,o),i.exports}t=o(198),o(738).default.getInstance(t.default.NAME).startup()})();