"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=join;function join(a,b,c){var d=[],e=b.map(function(a){return a[c]});return a.map(function(a){var f=e.indexOf(a[c]);-1!==f&&d.push(Object.assign({},a,b[f]))}),d}