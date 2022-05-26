import * as vscode from 'vscode';
import { FormatedColorArrayType, FormatedColorStringType } from '../format';
import { rgbToCod } from './RgbToCod';
import {hexToCodGsc, hexToCodMenu } from './HexToCod';

export function toCodColor(formatedColor: FormatedColorStringType | FormatedColorArrayType) {
  switch (formatedColor.type) {
    // case "rgb":
    //   return rgbToCod(formatedColor.value);
    //   break;

    case "hex":
      return hexToCodGsc(formatedColor.value);
      break;

    // case "hex":
    //   return Rgb2Cod(formatedColor.value);
    //   break;

     case "hexa":
        return hexToCodMenu(formatedColor.value);
        break;

    case "rgb":
      return rgbToCod(formatedColor.value);
      break;

    // case "hsla":
    //   return hslaToRgb(formatedColor.value);
    //   break;

    default:
      vscode.window.showErrorMessage('error from toRgb()');
      throw new Error('error from toRgb()');
      break;
  }
}