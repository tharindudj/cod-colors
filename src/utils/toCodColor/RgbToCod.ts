import * as vscode from 'vscode';

// RGB TO HEX
export function rgbToCod(rgbArr: number[]) {
  let r:number = rgbArr[0];
  let g:number = rgbArr[1];
  let b:number = rgbArr[2];

    r = round(r / 255);
    g = round(g / 255);
    b = round(b / 255);

  return "(" + r + ", " + g + ", " + b + ");";
}

function round(num:any) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}