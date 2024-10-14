import Container = PIXI.Container
import Graphics = PIXI.Graphics
import Sprite = PIXI.Sprite
import Text = PIXI.Text
import TextStyle = PIXI.TextStyle
import {MapConfig} from "./MapConfig";

export default class Grid extends Container {
    constructor(row, col, value) {
        super();
        // console.log({row, col, value})
        const color = MapConfig.gridColor[value]
        const rect = new Graphics()
        rect.lineStyle(2, 0xfeeb77, 1);
        rect.beginFill(color);
        rect.drawRect(0, 0, MapConfig.gridWidth, MapConfig.gridHeight)
        rect.endFill();
        this.addChild(rect)

        /*const style = new TextStyle({
            fontSize: 10,
        });
        const text = new Text(`${row}/${col} ${value}`, style);
        this.addChild(text)*/

        const x = col * MapConfig.gridWidth
        const y = row * MapConfig.gridHeight

        this.x = x;
        this.y = y;
    }

    setValue(value) {
        this.removeChildAt(0);

        const color = MapConfig.gridColor[value]
        const rect = new Graphics()
        rect.lineStyle(2, 0xfeeb77, 1);
        rect.beginFill(color);
        rect.drawRect(0, 0, MapConfig.gridWidth, MapConfig.gridHeight)
        rect.endFill();
        this.addChildAt(rect, 0)
    }
}