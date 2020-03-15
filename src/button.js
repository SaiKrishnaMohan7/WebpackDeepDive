// CommonJS module

const makeButton = (buttonName) => {
  const buttonLabel = `Button: ${buttonName}`;

  const button = document.createElement('button');
  button.innerText = buttonLabel;

  return button;
};

// A commonJS default export
module.exports = makeButton;

/**
 * A commonJS Named Export
 * const buttonName = () => 'Le Name';
 *
 * exports.buttonNamePrinter = buttonName;
 *
 * Both module.exports and exports point to the same object but using exports is better (Standard and no Overwrites)!
 * helpful: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
 */