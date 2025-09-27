# Holiday in Gardenie

Multilingual website for B&B Roma, with dynamic color palette and easy customization.

## Repository
- GitHub: https://github.com/fabianex87/holiday-in-gardenie

## Getting Started

### 1. Install dependencies
#### 1. Start the project
You do not need to install or build anything to view the site. Simply open `index.html` in your browser:

1. Locate the file `index.html` in the project folder.
2. Double-click to open it, or right-click and choose your browser.
3. The site will work locally without a server.

#### 2. Install dependencies (for palette generator)
To use the color palette generator, install chroma.js:
```sh
npm install chroma-js
```

### 2. Run the project
You can open `index.html` directly in your browser. No build step is required.

### 3. Generate/Update Color Palette
To update the CSS color palette in `style.css`:
- With a custom base color:
  ```sh
  node generate-palette.js "#ff6600"
  ```
- With a random color:
  ```sh
  node generate-palette.js
  ```
The palette will be updated automatically in `style.css`.

### 4. Multilingual Support
- All labels and content are translatable via JSON files in the `lang/` folder.
- The site detects browser language automatically.
- To test a specific language, set `window.lang = "xx"` in `index.html` (where `xx` is the language code).

### 5. Structure
- `index.html` — Main page
- `style.css` — Custom styles and color palette
- `script.js` — Dynamic content and translations
- `lang/` — Translation files (it, en, es, fr, de, pl, pt, ru, sq)
- `generate-palette.js` — Node.js script to update color palette
- `assets/` — Images and icons

## Notes
- No build tools required, just a browser and Node.js for palette updates.
- You can customize translations by editing the files in `lang/`.
- For any issues, check the repository or open an issue on GitHub.

---
Made with ❤️ by fabianex87
