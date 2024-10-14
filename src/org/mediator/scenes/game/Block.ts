import Container = PIXI.Container
import Graphics = PIXI.Graphics
import Sprite = PIXI.Sprite
import Text = PIXI.Text
import {MapConfig} from "./MapConfig";
import {BlockConfig} from "./BlockConfig";

export default class Block extends Container {
    public map = null;
    public type = null;
    public status = 0;
    public statusCount = 0;

    public row = null;
    public col = null;

    constructor(map) {
        super();
        this.map = map;

        const typeList = ['S', 'Z', 'J', 'L', 'T', 'O', 'I'];
        const randomType = typeList[Math.floor(Math.random() * typeList.length)];
        // const randomType = "I";
        const type = BlockConfig[randomType];
        const status = Math.floor(Math.random() * type.length);
        // console.log({t, type, status});

        this.type = type;
        this.status = status;
        this.statusCount = type.length;
        this.row = 0;
        this.col = 3;
        this.x = (this.col * MapConfig.gridWidth);
        this.y = 0;

        this.renderBlock();
    }

    renderBlock() {
        while (this.children.length) {
            this.removeChildAt(0);
        }

        for (let i = 0; i < this.statusArr.length; i++) {
            for (let j = 0; j < this.statusArr[i].length; j++) {
                if (this.statusArr[i][j] !== 0) {
                    const color = 0xff0000
                    const x = j * MapConfig.gridWidth;
                    const y = i * MapConfig.gridHeight;
                    const rect = new Graphics()
                    rect.lineStyle(2, 0xfeeb77, 1);
                    rect.beginFill(color);
                    rect.drawRect(0, 0, MapConfig.gridWidth, MapConfig.gridHeight)
                    rect.endFill();
                    rect.x = x;
                    rect.y = y;
                    this.addChild(rect)
                }
            }
        }
    }

    moveDown() {
        if (this.check(this.row + 1, this.col)) {
            this.row++;
            this.y = this.row * MapConfig.gridHeight;
            return true;
        } else {
            return false;
        }
    }

    moveLeft() {
        if (this.check(this.row, this.col - 1)) {
            this.col--;
            this.x = this.col * MapConfig.gridWidth;
        }
    }

    moveRight() {
        if (this.check(this.row, this.col + 1)) {
            this.col++;
            this.x = this.col * MapConfig.gridWidth;
        }
    }

    moveEnd() {
        let oldRow = this.row;
        while (this.check(this.row + 1, this.col)) {
            this.row++;
        }
        this.y = this.row * MapConfig.gridHeight;

        if (oldRow !== this.row) {
            PIXI.sound.play('drop');
        }
    }

    rotate() {
        const oldStatus = this.status;
        this.status++;

        if (this.status > this.statusCount - 1) {
            this.status = 0;
        }
        // console.log({oldStatus, status: this.status, check: this.check(this.row, this.col)})
        if (!this.check(this.row, this.col)) {
            this.status = oldStatus;
        }

        if (oldStatus !== this.status) {
            PIXI.sound.play('swap')
        }

        this.renderBlock();
    }

    check(row, col) {
        const {mapData} = this.map;
        for (let i = 0; i < this.statusArr.length; i++) {
            for (let j = 0; j < this.statusArr[i].length; j++) {
                const check_row = row + i;
                const check_col = col + j;

                if (this.statusArr[i][j] !== 0 && mapData[check_row]?.[check_col] !== 0) {
                    // console.log({check_row, check_col, value: map.mapData[check_row][check_col]})
                    return false;
                }
            }
        }
        return true;
    }


    get typeArr() {
        return this.type;
    }

    get statusArr() {
        return this.type[this.status];
    }

    get mapGridArr() {
        return this.statusArr.map((val1, row) => {
            return val1.map((val2, col) => {
                return val2 ? [this.row + row, this.col + col] : null;
            })
        }).flat(1).filter(item => item);
    }
}