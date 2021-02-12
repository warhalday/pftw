// selet empty div and assign to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put an h1 inside of it
// create a new element

const heading = document.createElement('h1');
heading.innerHTML = 'Are llamas just long dogs?';
heading.style.fontFamily = 'courier new';
heading.style.fontSize = 'xx-large';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
    document.body.style.backgroundColor = 'gold';

}
