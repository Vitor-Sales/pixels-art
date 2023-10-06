// window.onload = () => {
// }
// Requisito 1: Criar titulo com id = 'title'. Conteudo: 'Paleta de Cores. Criar elemento para paleta de cores com id = 'color-palette' e cada cor individual dentro da paleta deve possuir a classe color.

const bodyTag = document.getElementsByTagName('body')[0];
let mainTitle = document.createElement('h1');
const colorPalette = document.createElement('section');

mainTitle.id = 'title';
mainTitle.innerText = 'Paleta de Cores';

colorPalette.id = 'color-palette';

bodyTag.appendChild(mainTitle);
bodyTag.appendChild(colorPalette);

const pixelElemenstOfPaletteCreation = () => {
    const colors = ['#219C90', '#E9B824', '#EE9322', '#D83F31'];
    for (let index = 0; index < colors.length; index += 1) {
        let colorDiv = document.createElement('div');
        colorDiv.className = 'color';
        colorDiv.style.backgroundColor = colors[index];
        colorDiv.style.border = '1px solid black';
        colorDiv.style.display = 'inline-block';
        colorDiv.style.width = '80px';
        colorDiv.style.height = '80px';
        colorPalette.appendChild(colorDiv);
    }
};
pixelElemenstOfPaletteCreation();

const createElementWithIdFunction = (element, id, parent) => {
    const thisElement = document.createElement(element);
    thisElement.id = id;
    parent.appendChild(thisElement);
};
const createElementWithClassFunction = (element, classe, parent) => {
    const thisElement = document.createElement(element);
    thisElement.className = classe;
    parent.appendChild(thisElement);
};
// Requisito 2
const boardOfPixelsCreation = () => {
    createElementWithIdFunction('section', 'pixel-board', bodyTag);
    const pixelBoard = document.getElementById('pixel-board');
    pixelBoard.style.width = '210px';
    pixelBoard.style.height = '210px';
    for (let index = 0; index < 25; index += 1) {
        createElementWithClassFunction('div', 'pixel', pixelBoard);
        let pixel = document.querySelectorAll('.pixel')[index];
        pixel.style.width = '40px';
        pixel.style.height = '40px';
        pixel.style.border = '1px solid black';
        pixel.style.display = 'inline-block';
        pixel.style.backgroundColor = 'white';
    };
};
boardOfPixelsCreation();

// Requisito 3: Crie função para selecionar a cor da paleta: uma cor por vez

const divColor1 = document.querySelectorAll('.color')[0];
divColor1.classList.add('selected');

const colorSelection = (event) => {
        let selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        event.target.classList.add ('selected');
};

for (let index = 0; index < 4; index += 1) {
    let divColor = document.querySelectorAll('.color')[index];
    divColor.addEventListener('click', colorSelection);
    
}
