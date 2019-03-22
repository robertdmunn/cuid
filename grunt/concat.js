module.exports = {
  fingerprint_browser: {
    options: {
      sourceMap: true
    },
    src: [
      "src/lib/headers/fingerprint",
      "src/lib/fingerprint.browser.js",
      "src/lib/footers/fingerprint"
    ],
    dest: "lib/fingerprint.browser.js"
  },
  fingerprint_browser_es6: {
    options: {
      sourceMap: true
    },
    src: [
      "src/lib/headers/fingerprint.es6",
      "src/lib/fingerprint.browser.js",
      "src/lib/footers/fingerprint.es6"
    ],
    dest: "lib/fingerprint.browser.es6.js"
  },
  getRandomValue_browser: {
    options: {
      sourceMap: true
    },
    src: [
      "src/lib/getRandomValue.browser.js",
      "src/lib/footers/getRandomValue"
    ],
    dest: "lib/getRandomValue.browser.js"
  },
  getRandomValue_browser_es6: {
    options: {
      sourceMap: true
    },
    src: [
      "src/lib/getRandomValue.browser.js",
      "src/lib/footers/getRandomValue.es6"
    ],
    dest: "lib/getRandomValue.browser.es6.js"
  },
  pad: {
    options: {
      sourceMap: true,
      separator: ''
    },
    src: [
      "src/lib/headers/pad",
      "src/lib/pad.js"
    ],
    dest: "lib/pad.js"
  },
  pad_es6: {
    options: {
      sourceMap: true,
      separator: ''
    },
    src: [
      "src/lib/headers/pad.es6",
      "src/lib/pad.js"
    ],
    dest: "lib/pad.es6.js"
  },
  index: {
    options: {
      sourceMap: true
    },
    src: [
      "src/headers/index_license",
      "src/headers/index",
      "src/index.js",
      "src/footers/index"
    ],
    dest: "index.js"
  },
  index_es6: {
    options: {
      sourceMap: true
    },
    src: [
      "src/headers/index_license",
      "src/headers/index.es6",
      "src/index.es6.js"
    ],
    dest: "index.es6.js"
  }
};
