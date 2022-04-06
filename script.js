//container
const container = document.createElement('div');
container.className='container';
document.body.appendChild(container);
//square divs
for(let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.className='square';
    container.appendChild(squareDiv);
}
//defining the squareDiv for the global scope
const squareDivs = document.querySelectorAll('.square');
//Hover State
squareDivs.forEach(squareDiv => {
    squareDiv.addEventListener('mouseenter', hover);
    squareDiv.addEventListener('mouseleave', hoverEnd)
})
function hover (e) {
    e.target.style.backgroundColor="#d3cfcf";
}
function hoverEnd (e) {
    e.target.style.backgroundColor='';
}