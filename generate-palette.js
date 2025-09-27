// Node.js script to generate and update CSS color palette in style.css
// Usage: node generate-palette.js [baseColor]
// If no baseColor is provided, keeps current colors

const fs = require('fs');
const chroma = require('chroma-js');

const STYLE_PATH = 'style.css';
const PALETTE_START = ':root {';
const PALETTE_END = '}';
const DEFAULT_COLORS = [
  '#2563eb', // Primario
  '#b2d8ff', // Secondario
  '#fcf9f8', // Sfondo
  '#e3eafc', // Bordo/card
  '#1e40af'  // Accento/scuro
];

function generatePalette(baseColor) {
  // Generate 5 colors from baseColor
  if (!baseColor) return DEFAULT_COLORS;
  const scale = chroma.scale([baseColor, 'white']).mode('lab').colors(5);
  return [
    scale[0], // Primario
    chroma(baseColor).brighten(2).hex(), // Secondario
    scale[2], // Sfondo
    scale[3], // Bordo/card
    chroma(baseColor).darken(2).hex() // Accento/scuro
  ];
}

function updateStyleCss(colors) {
  let css = fs.readFileSync(STYLE_PATH, 'utf8');
  const start = css.indexOf(PALETTE_START);
  const end = css.indexOf(PALETTE_END, start);
  if (start === -1 || end === -1) throw new Error('Palette block not found');
  const before = css.slice(0, start + PALETTE_START.length);
  const after = css.slice(end);
  const comments = [
    '/* Primario */',
    '/* Secondario */',
    '/* Sfondo */',
    '/* Bordo/card */',
    '/* Accento/scuro */'
  ];
  const palette = colors.map((c, i) => `\n  --color-${i+1}: ${c}; ${comments[i]}`).join('');
  const newCss = before + palette + '\n' + after;
  fs.writeFileSync(STYLE_PATH, newCss, 'utf8');
  console.log('Palette aggiornata!');
}

const baseColor = process.argv[2];
const colors = generatePalette(baseColor);
updateStyleCss(colors);
