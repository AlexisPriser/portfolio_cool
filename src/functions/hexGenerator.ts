function hex(c: string) {
  let s = "0123456789abcdef";
  let i = parseInt(c);

  if (isNaN(i)) return "00";

  i = Math.round(Math.min(Math.max(0, i), 255));
  const res = s.charAt((i - (i % 16)) / 16) + s.charAt(i % 16);
  console.log("c", res);
  return res;
}

/* Convert an RGB triplet to a hex string */
function convertToHex(_rgb: number[]) {
  const rgb = _rgb.toString();
  const hex1 = hex(rgb[0]);
  const hex2 = hex(rgb[1]);
  const hex3 = hex(rgb[2]);
  return hex1 + hex2 + hex3;
}

/* Remove '#' in color hex string */
function trim(s: string) {
  return s.charAt(0) == "#" ? s.substring(1, 7) : s;
}

/* Convert a hex string to an RGB triplet */
function convertToRGB(hex: string) {
  let color = [];
  color[0] = parseInt(trim(hex).substring(0, 2), 16);
  color[1] = parseInt(trim(hex).substring(2, 4), 16);
  color[2] = parseInt(trim(hex).substring(4, 6), 16);
  return color;
}

export function generateColor(
  colorStart: string,
  colorEnd: string,
  colorCount: number
) {
  // The beginning of your gradient
  let start = convertToRGB(colorStart);

  // The end of your gradient
  let end = convertToRGB(colorEnd);

  console.log("start", start);
  console.log("end", end);
  console.log("len", colorCount);

  // The number of colors to compute
  let len = colorCount;

  //Alpha blending amount
  let alpha = 0.0;

  let saida = [];

  for (let i = 0; i < len; i++) {
    let c = [];
    alpha += 1.0 / len;

    c[0] = start[0] * alpha + (1 - alpha) * end[0];
    c[1] = start[1] * alpha + (1 - alpha) * end[1];
    c[2] = start[2] * alpha + (1 - alpha) * end[2];

    console.log("c_list", c);

    saida.push(convertToHex(c));
  }
  console.log("saida", saida);
  return saida;
}

// Usage example
/*
let tmp = generateColor("#000000", "#ff0ff0", 10);

for (let cor in tmp) {
  $("#result_show").append(
    "<div style='padding:8px;color:#FFF;background-color:#" +
      tmp[cor] +
      "'>COLOR " +
      cor +
      "° - #" +
      tmp[cor] +
      "</div>"
  );
}*/
