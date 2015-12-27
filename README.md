# stylelint-config-nju33

[![npm version](https://badge.fury.io/js/stylelint-config-nju33.svg)](https://badge.fury.io/js/stylelint-config-nju33)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

A stylelint config by nju33

## Install

```
npm i stylelint-config-nju33
```

## Usage

Create `.stylelintrc` as follows

```
{
  "extends": "stylelint-config-nju33"
}
```

## Example

```css
@charset "utf-8";

@import "normalize.css";
@import "common.css";

/* ↑ newline on top of comment */

/*
  ↓ warnings
  .warning{}
    - single line
  .warning{
    color: #fff;
  }
    - single space before "{"


    - Unexpected empty line
*/

.something {
  @extend something;
  background-color: #fff;
  background-image:
    linear-gradient(
      to bottom,
      transparent 50%,
      #ccc 50%
    );

  /*
    ↓ warnings
    color:#fff;
      - single space after ":"
    background-color: #333;
      - duplicate property "background-color"
    background: #000;
      - shorthand "background" after "background-color"
    z-index: 100 !important;
      - !important
    background-image: liner-gradient(to right, #000 10%, transparent 10%, transparent 90%, #000 90%);
      - max line length 80
    background-image:
      liner-gradient(to right, #000 10%, transparent 10%, transparent 90%, #000 90%);
      - single space after ":" with a single-line value
  */
}

.color {
  color: #fff;
  background-color: #f8f8f8;

  /*
    ↓ warning
    border-top: white;
      - named color "white"
  */
}

.number {
  width: 33.333%;
  padding: .5em;
  margin-left: calc(50% - 50px);

  /*
    ↓ warnings
    width: 33.3333%;
      - "33.3333" to be "33.333"
    padding: 0.5em;
      - leading zero
    margin: 1.000px;
      - trailing zero(s)
    margin-left: calc(50%-50px);
      - an operator before sign "-"
  */
}

.multi-value {
  text-shadow: 0 0 0 #000, 0 0 0 #111;
  box-shadow:
    0 0 0 0 #000,
    0 0 0 0 #111;
  transform: translate(0, 0) scale(2);
  filter:
    blur(3px)
    grayscale(30%);

  /*
    ↓ warning
    transform: translate( 0, 0 ) scale(2);
      - whitespace after "("
      - whitespace before ")"
  */
}

.multi-selector1, .multi-selector2 {
  /* ... */
}

.multi-selector1,
.multi-selector2 {
  /* ... */
}

/*
  ↓ warning
  .multiselector1,.multi-selector2 {
    - single space after "," in a single-line list
  }
*/

@media screen and (min-width: 600px) {}
@media screen and (minwidth <= 600px) {}

/*
  ↓ warnings
  @media screen and (min-width:600px) {}
    - single space after ":"
  @media screen and (minwidth<=600px) {}
    - single space before range operator
    - single space after range operator
*/

@media screen and (min-width: 800px) {
  .nest1 {
    /* ... */
  }

  .nest2 {
    /* ... */
  }
}

/*
  ↓ warnings
  @media screen and (min-width: 800px) {

    .nest1 {
    }

    .nest2 {
    }
  }
    - empty line before nested rule
  @media screen and (min-width: 800px) {
    .nest1 {
    }
    .nest2 {
    }
  }
    - empty line before nested rule
*/

/*
  other rules
    - indent 2 space
    - no eol whitespace
*/

/* ↓ newline to eof */

```
