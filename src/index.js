import nav from './nav';
import { top, bottom } from './footer';
// A commonJS defualt export, hence renamed here and Webpack supports interoperability
// Better to stick to one pattern of importing
// Two module sharing specs: CommonJS and ESM (ECMA Script Modules; Not to be confused with EcmaScript specification)
import nameButtonForMe from './button';

console.log(nav(), top, bottom, nameButtonForMe('This Button!'));