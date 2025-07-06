# 📦 PreciseFontScaler (FSS)


---

## 🐛 The Problem

Font sizing across screen sizes and resolutions is consistently inconsistent.

You may try:
- `rem` or `em` — but they only scale relatively and inconsistently.
- `clamp()` — can get messy with mixed font types or break on small screens.
- `vw` / `vh` — distorts layout if overused.
- `@media queries` — tedious and error-prone across complex layouts.

> Developers are forced to micro-manage font sizes for every screen manually.

---

## 💡 The Philosophy

> Instead of adapting your design to screens,  
> **PFS adapts screens to your design.**

---

## 🚀 What It Does

FSS:
- Detects the computed font size of any text element.
- Scales it automatically for any screen using:
  - Desktop reference size (width + height),
  - Mobile reference width (for portrait),
  - Pixel density of the device.
- Applies the new font size inline via JavaScript.

You don’t need media queries or manual recalculations.

---

## ✅ Key Features

| Feature                  | Description                                                               |
|--------------------------|---------------------------------------------------------------------------|
| 🔍 Computed size reading | Works with `px`, `rem`, `%`, or even inherited/default styles             |
| 📱 Mobile smartness      | Uses only screen width in portrait (phone) mode                           |
| 💻 Desktop logic         | Uses width + height + device pixel ratio for large screens                |
| 🎛️ Tweakable scaling     | Global `scaleMultiplier` to fine-tune scaling sensitivity                 |
| 🧠 Pure JavaScript       | Lightweight, no dependencies                                              |
| 🖋️ Unit-agnostic         | No restrictions on your CSS units or coding style                         |

---

## 📦 How to Use

### 1️⃣ Define your styles normally

No special CSS rules needed. Use any unit, or none at all:

```css
body { font-family: sans-serif; }
h1   { font-size: 3rem; }
p    { font-size: 1.1rem; }
/* Even this will work: */
.note { /* no font-size defined */ }

```
## Usage

```
 PreciseFontScaler.init({
    baseScreen: {
      desktopWidth: 1440,   // Your design width
      desktopHeight: 900,   // Your design height
      mobileWidth: 375,     // Reference width for portrait mobile
      density: 1            // Device pixel ratio used when you designed
    },
    scaleMultiplier: 1,      // Optional (default is 1)
    selectors: ["body", "h1", "p", ".note"]  // Elements you want to scale
  });
```

| Option            | Type      | Description                                                   |
| ----------------- | --------- | ------------------------------------------------------------- |
| `desktopWidth`    | number    | Width (in px) of the screen you originally designed on        |
| `desktopHeight`   | number    | Height of your reference screen                               |
| `mobileWidth`     | number    | Width used for mobile scaling (portrait mode)                 |
| `density`         | number    | Your original screen’s pixel ratio (e.g. 1 or 2)              |
| `scaleMultiplier` | number    | Optional: globally scale all font sizes (e.g. 0.95, 1.1, etc) |
| `selectors`       | string\[] | List of CSS selectors for elements to scale                   |


## 📌 Notes

- No need to use px. FSS works with any unit or browser default.

- Don’t use clamp(), vw, or other JS-based scalers alongside FSS.

- Avoid mixing multiple font scaling systems — FSS handles everything.

- You don’t need to define font-size at all — defaults will still scale.


## 🧠 Why FSS?
Because you shouldn’t have to redesign typography for every screen.

FSS helps you:

Design once, scale forever.

Keep typography predictable and consistent.

Remove clutter from your CSS and media queries.

Focus on content and aesthetics, not device hacks.

## 📄 License
MIT — use freely, improve freely. Attribution is appreciated but not required.