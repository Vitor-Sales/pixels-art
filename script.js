// window.onload = () => {}
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
        colorDiv.style.borderRadius = '40px';
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
const createButton = () => {
    createElementWithIdFunction('button', 'clear-board', bodyTag);
    const clearBtn = document.getElementById('clear-board');
    clearBtn.innerText = 'Limpar';
    clearBtn.style.backgroundColor = 'black';
    clearBtn.style.color = 'white';
    clearBtn.style.padding = '10px 20px';
    clearBtn.style.margin = '10px 20px';
    clearBtn.style.borderRadius = '20px';
    clearBtn.style.fontWeight = '900';



};
const createButtonColors = () => {
    createElementWithIdFunction('button', 'button-random-color', bodyTag);
    const alleatoryBtn = document.getElementById('button-random-color');
    alleatoryBtn.innerText = 'Cores aleatórias';
    alleatoryBtn.style.backgroundColor = '#219C90';
    alleatoryBtn.style.color = 'white';
    alleatoryBtn.style.padding = '10px 20px';
    alleatoryBtn.style.margin = '10px 20px';
    alleatoryBtn.style.borderRadius = '20px';
    alleatoryBtn.style.fontWeight = '900';
};
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
createButton();
createButtonColors();
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
    
};

// Requisito 4: o pixel clicado deve ter a cor trocada de acordo com a paleta de cores
const pixelBoard = document.getElementById('pixel-board');

pixelBoard.addEventListener('click', (event) => {
    let selectedColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
});

// Requisito 5: Criar butao que pinta todos os pixel de branco.




const clearButton = document.getElementById('clear-board');
// console.log(clearButton);
clearButton.addEventListener('click', () => {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor = 'white';
    }
});

// Requisito 6: Criar botão para gerar cores aleatorias

const aleatoryButton = document.getElementById('button-random-color');
// console.log(aleatoryButton);
aleatoryButton.addEventListener('click', () => {
    const colors = document.querySelectorAll('.color');
    for (let index = 0; index < colors.length; index += 1) {
        const randomColor1 = Math.round(Math.random() * 255);
        const randomColor2 = Math.round(Math.random() * 255);
        const randomColor3 = Math.round(Math.random() * 255);
        colors[index].style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
    }
})
