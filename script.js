const PreciseFontScaler = (() => {
  let desktopWidth = 1440;
  let desktopHeight = 900;
  let mobileWidth = 375;
  let baseDensity = 1;
  let scaleMultiplier = 1;

  const elementsMap = new Map();

  function init(options = {}) {
    if (options.baseScreen) {
      desktopWidth = options.baseScreen.desktopWidth || desktopWidth;
      desktopHeight = options.baseScreen.desktopHeight || desktopHeight;
      mobileWidth = options.baseScreen.mobileWidth || mobileWidth;
      baseDensity = options.baseScreen.density || baseDensity;
    }

    scaleMultiplier = options.scaleMultiplier || 1;

    const selectors = options.selectors || [
      "body",
      "h1",
      "h2",
      "h3",
      "p",
      "span",
    ];
    elementsMap.clear();

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        const style = getComputedStyle(el);
        const fontSize = parseFloat(style.fontSize); // ← regardless of how it's defined (px, rem, default)
        if (!isNaN(fontSize)) {
          elementsMap.set(el, fontSize);
        }
      });
    });

    scaleFonts();
    window.addEventListener("resize", scaleFonts);
  }

  function isMobilePortrait() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const isPortrait = h > w;

    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUA =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      );
    const isSmallScreen = Math.min(w, h) <= 768;
    return isPortrait && (isMobileUA || isSmallScreen);
  }

  function scaleFonts() {
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const currentDensity = window.devicePixelRatio || 1;

    let scaleFactor;

    if (isMobilePortrait()) {
      const widthRatio = screenW / mobileWidth;
      scaleFactor = widthRatio;
    } else {
      const widthRatio = screenW / desktopWidth;
      const heightRatio = screenH / desktopHeight;
      const densityRatio = currentDensity / baseDensity;
      scaleFactor = ((widthRatio + heightRatio) / 2) * densityRatio;
    }

    scaleFactor *= scaleMultiplier;

    elementsMap.forEach((originalSize, el) => {
      const newSize = originalSize * scaleFactor;
      el.style.fontSize = `${newSize.toFixed(2)}px`;
    });
  }

  return { init };
})();
