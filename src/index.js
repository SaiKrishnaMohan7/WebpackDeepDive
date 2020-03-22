import './footer.css';
import './button.css';
import img from '../img/webpack-logo.jpg';
// import nav from './nav';
// import { footer } from './footer';
const getFooter = () => import('./footer'); // Static Code split since footer imported by giving exact location
// import Foo from './foo.ts'; breaks as expected since no .tsconfig

// A commonJS defualt export, hence renamed here and Webpack supports interoperability
// Better to stick to one pattern of importing
// Two module sharing specs: CommonJS and ESM (ECMA Script Modules; Not to be confused with EcmaScript specification)
import makeButton from './button';

// In the built file, the string 'red' can't found since we are only using makeColorStyle and not `red`
// This is dead code elimination or Tree Shaking
// Webpack statically analyses the syntax to figure out what is being used and only builds that
import { makeColorStyle } from './button-styles';
import makeImage from './image';

const button = makeButton('This Button!')
button.style = makeColorStyle('yellow');
document.body.appendChild(button);

const image = makeImage(img);
document.body.appendChild(image);

// Static Code Splitting: Could be used for loading in giant libs
button.addEventListener('click', (e) => {
  getFooter().then(footerModule => {
    // footerModule is the whole module and the named exports from the module are available just like import { namedExport } from './moduleName'
    // Could destructure too!
    // IF accessing a default export from module: It will me abvailaible in the `default` property of the module object (ex: footerModule.default if it had an default export that we want to Lazy load)
    // https://javascript.info/modules-dynamic-imports
    document.body.appendChild(footerModule.footer);
  })
})

// console.log(img); // base64 encoded image url