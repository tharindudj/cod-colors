import * as vscode from 'vscode';

export function formatRgb(clr: string) {
  // remove all whitespace
  const rgb = clr.replace(/\s/g, "");
  // make array of values
  const rgbColors = rgb.substring(rgb.indexOf('(') + 1, rgb.lastIndexOf(')')).split(/,\s*/);

  const rgbValues = rgbColors.map(x => {
    // if value is a percentage parse it into 0-255 value
    if (x.includes("%")) {
      const number = Math.round(parseFloat(x.replace(/\%/g, "")) * 2.55);
      if ((number > 255) || (number < 0)) { 
        vscode.window.showErrorMessage(`RGB value out of range [0-255] in ${rgb}`);
        throw Error(`RGB value out of range [0-255] in ${rgb}`); 
      }
      return number;
    } else {
      const number = parseInt(x);
      if ((number > 255) || (number < 0)) { 
        vscode.window.showErrorMessage(`RGB value out of range [0-255] in ${rgb}`);
        throw Error(`RGB value out of range [0-255] in ${rgb}`); 
      }
      return number;
    }
  });

  return [rgbValues[0], rgbValues[1], rgbValues[2]];
}


export function formatRgba(clr: string) {
  const rgba = clr.replace(/\s/g, "");
  const rgbaColors = rgba.substring(rgba.indexOf('(') + 1, rgba.lastIndexOf(')')).split(/,\s*/);

  const rgbaValues = rgbaColors.map((x, i) => {
    // if current value is the opacity
    if (i === rgbaColors.length - 1) { 
      const alpha = parseFloat(x); 
      return alpha >= 1 ? 1 : alpha <= 0 ? 0 : alpha;
    }

    if (x.includes("%")) {
      const number = Math.round(parseFloat(x.replace(/\%/g, "")) * 2.55);
      if ((number > 255) || (number < 0)) { 
        vscode.window.showErrorMessage(`RGB value out of range [0-255] in ${rgba}`);
        throw Error(`RGB value out of range [0-255] in ${rgba}`); 
      }
      return number;
    } else {
      const number = parseInt(x);
      if ((number > 255) || (number < 0)) { 
        vscode.window.showErrorMessage(`RGB value out of range [0-255] in ${rgba}`);
        throw Error(`RGB value out of range [0-255] in ${rgba}`); 
      }
      return number;
    }
  });

  return [rgbaValues[0], rgbaValues[1], rgbaValues[2], rgbaValues[3]];
}