# Iranian National Code Browser Extension

A lightweight, offline browser extension for generating, validating, and identifying Iranian National ID (`کد ملی`) numbers. It implements the official checksum algorithm and maps the first three digits to the originating city/province.

## Features
- Generate a random valid national code.
- Validate any 10-digit national code.
- Detect city/province from the first three digits.
- Copy generated code to clipboard.

## Installation

### Firefox
1. Visit the [Firefox Add-ons page](https://addons.mozilla.org/en-US/firefox/addon/iranian-national-code/).

### Chrome
1. Visit the [Chrome Web Store page](https://chromewebstore.google.com/detail/iranian-national-code/miihfmhaigckmekpfldahhegadpbcbin).

## Development

Edit the shared source files in the src folder. The browser folders only keep their manifest files and link to the shared source through src/:

```bash
bash scripts/sync-shared-source.sh
```

The script wires the shared UI, logic, and assets into both chrome/src and firefox/src so you only need to maintain one source.