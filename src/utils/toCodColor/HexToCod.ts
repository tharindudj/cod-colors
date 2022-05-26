import * as vscode from 'vscode';

export function hexToCodGsc(hex: string) {
  let r: any | number | string = 0;
  let g: any | number | string = 0;
  let b: any | number | string = 0;

  // 3 digits
  if (hex.length === 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];

  // 6 digits
  } else if (hex.length === 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  } else {
    vscode.window.showErrorMessage(`Hex input is not valid`);
    throw Error(`Hex input is not valid`);
  }

    r = round(r / 255);
    g = round(g / 255);
    b = round(b / 255);

  return "(" + r + ", " + g + ", " + b + ");";
}

export function hexToCodMenu(hex: string) {
  let r: any | number | string = 0;
  let g: any | number | string = 0;
  let b: any | number | string = 0;

  // 3 digits
  if (hex.length === 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];
  // 6 digits
  } else if (hex.length === 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  } else {
    vscode.window.showErrorMessage(`Hex input is not valid`);
    throw Error(`Hex input is not valid`);
  }
    r = round(r / 255);
    g = round(g / 255);
    b = round(b / 255);

  return "(" + r + ", " + g + ", " + b + "1 " + ");";
}

export function hexaToRgba(h: string) {
  let r: any = 0, g: any = 0, b: any = 0, a: any = 1;

  if (h.length === 5) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
    a = "0x" + h[4] + h[4];

  } else if (h.length === 9) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
    a = "0x" + h[7] + h[8];
  } else {
    vscode.window.showErrorMessage(`Hex input is not valid`);
    throw Error(`Hex input is not valid`);
  }

  a = +(a / 255).toFixed(2);

  return "rgba(" + +r + ", " + +g + ", " + +b + ", " + a + ")";
}

function round(num:any) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}