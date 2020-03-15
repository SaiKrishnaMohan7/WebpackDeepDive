import { red, blue } from './button-styles'

const top = document.createElement('div');
top.innerText = 'Top of footer';
top.style = `color: ${red}`;

const bottom = document.createElement('div');
bottom.innerHTML = 'Bottom of footer';
bottom.style = `color: ${blue}`;

const footer = document.createElement('footer');
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };