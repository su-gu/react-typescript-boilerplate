module.exports = {
  extends: "stylelint-config-standard",
  plugins: [
    "stylelint-order",
  ],
  rules: {
    "at-rule-no-unknown": true,
    "block-no-empty": [true, {
      "severity": "warning",
      "message": "No empty rule blocks.",
    }],
    "color-no-invalid-hex": true,
    "color-named": ["never", {
      "severity": "warning",
      "message": "No named (web) colors.",
    }],
    "color-hex-case": ["lower", {
      "severity": "warning",
    }],
    "color-hex-length": ["long", {
      "severity": "warning",
      "message": "No short notation for #HEX colors."
    }],
    "comment-no-empty": [true, {
      "message": "No empty comment",
      "severity": "warning",
    }],
    // "declaration-block-no-duplicate-properties": true,
    // "font-family-no-duplicate-names": true,
    // "font-family-no-missing-generic-family-keyword": [true, {
    //   "message": "Missing generic-family",
    // }],
    // "function-calc-no-invalid": true,
    // "function-linear-gradient-no-nonstandard-direction": true,
    // "media-feature-name-no-unknown": true,
    // "no-duplicate-at-import-rules": true,
    // "no-duplicate-selectors": true,
    // "no-extra-semicolons": [true, {
    //   "message": "Dublicated semicolon",
    // }],
    // "no-invalid-double-slash-comments": true,
    // "number-leading-zero": ["always", {
    //   "severity": "warning",
    //   "message": "Missing leading zero."
    // }],
    // "number-max-precision": [1, {
    //   "severity": "warning",
    //   "ignoreUnits": ["%", "em", "rem"],
    // }],
    // "property-no-unknown": true,
    // "selector-pseudo-class-no-unknown": true,
    // "selector-pseudo-element-no-unknown": true,
    // "selector-type-no-unknown": true,
    // "string-no-newline": true,
    // "unit-no-unknown": true,
    "order/order": [
      "declarations",
      {
        "type": "at-rule",
        "name": "media"
      },
      {
        "type": "rule",
        "selector": "^&::(before|after)"
      },
      {
        "type": "rule",
        "selector": "^&:\\w"
      },
      {
        "type": "rule",
        "selector": "^&_"
      },
      {
        "type": "rule",
        "selector": "^."
      }
    ],
    "order/properties-order": [
      "content",
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-flow",
      "flex-direction",
      "flex-wrap",
      "justify-content",
      "align-content",
      "align-items",
      "order",
      "align-self",
      "box-sizing",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "overflow",
      "overflow-x",
      "overflow-y",
      "color",
      "font",
      "font-family",
      "font-size",
      "line-height",
      "font-weight",
      "font-style",
      "font-variant",
      "list-style",
      "list-style-position",
      "list-style-type",
      "list-style-image",
      "text-align",
      "text-transform",
      "text-decoration",
      "border-collapse",
      "border-spacing",
      "table-layout",
      "empty-cells",
      "caption-side",
      "vertical-align",
      "direction",
      "font-size-adjust",
      "font-stretch",
      "font-effect",
      "font-emphasize",
      "font-emphasize-position",
      "font-emphasize-style",
      "font-smooth",
      "text-align-last",
      "letter-spacing",
      "word-spacing",
      "white-space",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-style",
      "text-emphasis-position",
      "text-indent",
      "text-justify",
      "text-outline",
      "text-wrap",
      "text-overflow",
      "text-overflow-ellipsis",
      "text-overflow-mode",
      "text-orientation",
      "word-wrap",
      "word-break",
      "tab-size",
      "hyphens",
      "columns",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "text-shadow",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "background",
      "background-color",
      "background-image",
      "linear-gradient",
      "background-repeat",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-size",
      "background-clip",
      "background-origin",
      "background-attachment",
      "box-decoration-break",
      "background-blend-mode",
      "border",
      "border-width",
      "border-style",
      "border-color",
      "border-top",
      "border-top-width",
      "border-top-style",
      "border-top-color",
      "border-right",
      "border-right-width",
      "border-right-style",
      "border-right-color",
      "border-bottom",
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color",
      "border-left",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "outline",
      "outline-width",
      "outline-style",
      "outline-color",
      "outline-offset",
      "box-shadow",
      "transform",
      "transform-origin",
      "backface-visibility",
      "perspective",
      "perspective-origin",
      "transform-style",
      "visibility",
      "opacity",
      "cursor",
      "filter",
      "transition",
      "transition-delay",
      "transition-timing-function",
      "transition-duration",
      "transition-property",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-play-state",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "quotes",
      "counter-reset",
      "counter-increment",
      "resize",
      "user-select",
      "nav-index",
      "nav-up",
      "nav-right",
      "nav-down",
      "nav-left",
      "pointer-events",
      "will-change",
      "clip",
      "clip-path",
      "zoom"
    ],
  },
  ignoreFiles: [
    "build/**/*"
  ],
}
