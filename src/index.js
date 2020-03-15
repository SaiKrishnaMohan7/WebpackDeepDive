import nav from './nav';
import { top, bottom } from './footer';

// A commonJS defualt export, hence renamed here and Webpack supports interoperability
// Better to stick to one pattern of importing
// Two module sharing specs: CommonJS and ESM (ECMA Script Modules; Not to be confused with EcmaScript specification)
import makeButton from './button';

// In the built file, the string 'red' can't found since we are only using makeColorStyle and not `red`
// This is dead code elimination or Tree Shaking
// Webpack statically analyses the syntax to figure out what is being used and only builds that
import { makeColorStyle } from './button-styles';

const button = makeButton('This Button!')
button.style = makeColorStyle('yellow');
document.body.appendChild(button);
console.log(nav(), top, bottom, makeColorStyle('yellow'));