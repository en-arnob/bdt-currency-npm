# Currency Formatter (BDT-specific)

This package provides a simple utility to format numbers into **Bangladeshi Taka (BDT)** currency format. It handles large numbers, converting them into the format commonly used in Bangladesh, including crore and lakh units.

## Installation

You can install the package via npm:

```bash
npm install bdt-currency
```

## Usage

To use the package, you can import it into your JavaScript or TypeScript file:

```javascript
const formatBDT = require('bdt-currency');

console.log(formatBDT(1000));           // Output: "৳ 1,000"
console.log(formatBDT(1000000));        // Output: "৳ 10 Lakh"
console.log(formatBDT(2500000000));     // Output: "৳ 250 Crore"
console.log(formatBDT(5000000000.75));  // Output: "৳ 500 Crore 75 Lakh"

```
