import { ColorType } from '../getColorType';
import { formatHex, formatHexa } from './formatHexs';
import { formatRgb, formatRgba } from './formatRgbs';


export type FormatedColorStringType = {
  type: "hex" | "hexa",
  value: string
};

export type FormatedColorArrayType = {
  type: "rgb" | "rgba" | "hsla",
  value: number[]
};

export function formatColor(colorType: ColorType) {
  switch (colorType.type) {
    case "rgb":
      return {
        type: colorType.type,
        value: formatRgb(colorType.value)
      } as FormatedColorArrayType;
      break;

    case "hex":
      return {
        type: colorType.type,
        value: formatHex(colorType.value)
      } as FormatedColorStringType;
      break;

    case "rgba":
      return {
        type: colorType.type,
        value: formatRgba(colorType.value)
      } as FormatedColorArrayType;
      break;

    case "hexa":
      return {
        type: colorType.type,
        value: formatHexa(colorType.value)
      } as FormatedColorStringType;
      break;

    default:
      throw new Error('error from formatColor()');
      break;
  }

}