window.onload = () => {
    pixelElemenstOfPaletteCreation();
}
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


