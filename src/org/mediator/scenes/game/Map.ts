import Container = PIXI.Container
import Graphics = PIXI.Graphics
import Sprite = PIXI.Sprite
import Text = PIXI.Text
import TextStyle = PIXI.TextStyle
import {MapConfig} from "./MapConfig";
import Grid from './Grid'

export default class Map extends Container {
    public width = null;
    public mapData: any[][] = null;

    constructor() {
        super();
        let {rows, cols, gridWidth, gridHeight, mapData} = MapConfig;
        let rowData = mapData;
        for (let i = 0; i < rowData.length; i++) {
            let colData = rowData[i];
            for (let j = 0; j < colData.length; j++) {
                const value = colData[j];
                const grid = new Grid(i, j, value)
                this.addChild(grid)
                this[`${i}_${j}`] = grid;
            }
        }
        this.width = cols * gridWidth;
        this.mapData = mapData;
    }

    public setMapGridValue(row, col, value,) {
        this.mapData[row][col] = value;
        this.renderGrid();
    }

    public resetGridData() {
        for (let row = 0; row < this.mapData.length; row++) {
            for (let col = 0; col < this.mapData[row].length; col++) {
                this.mapData[row][col] = 0;
                this[`${row}_${col}`].setValue(0)
            }
        }
    }

    public renderGrid() {
        for (let row = 0; row < this.mapData.length; row++) {
            for (let col = 0; col < this.mapData[row].length; col++) {
                const value = this.mapData[row][col];
                this[`${row}_${col}`].setValue(value)
            }
        }
    }
}