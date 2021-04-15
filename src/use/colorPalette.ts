

export const useColorPalette = function (length: number, s = 100, l = 50) {
  const steps = length < 50 ? 360 / length : 30;
  const colorPalette = [];
  for (let i = 0; i < length; i++) {
    colorPalette.push(hslToHex(steps * i, s, l));
  }
  console.log(colorPalette);
  return colorPalette;
}

export const hslToHex = function (h: number, s: number, _l: number) {
  const l = _l / 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const toHex = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${toHex(0)}${toHex(8)}${toHex(4)}`;
}