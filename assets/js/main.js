//Edit names zone

const divName = document.querySelector('.tier-name');
const nameH2 = document.querySelector('.tier-name-h2');
const btnChName = document.querySelector('.edit-name');

const inputNameTier = document.createElement('input');
inputNameTier.type = 'text';
inputNameTier.classList.add('tier-name-input');
inputNameTier.style.fontSize = '1.5rem';
inputNameTier.style.width = '13rem';

btnChName.addEventListener('click', () => {
    if(btnChName.src[btnChName.src.length-5] === 'r') {
        btnChName.src = './assets/images/salvar-arquivo.png';
        divName.removeChild(btnChName);
        divName.removeChild(nameH2);
        divName.appendChild(inputNameTier);
        divName.appendChild(btnChName);
        
    } else if(btnChName.src[btnChName.src.length-5] === 'o') {
        btnChName.src = './assets/images/editar.png';
        if(inputNameTier.value) {
            nameH2.innerHTML = inputNameTier.value;
        } else {
            nameH2.innerHTML = "Minha Tier List";
        }
        divName.removeChild(btnChName);
        divName.removeChild(inputNameTier);
        divName.appendChild(nameH2);
        divName.appendChild(btnChName);
        
    }
});

const [s, a, b, c, d] = [
    document.querySelector('#s'),
    document.querySelector('#a'),
    document.querySelector('#b'),
    document.querySelector('#c'),
    document.querySelector('#d'),
];

const [sh3, ah3, bh3, ch3, dh3] = [
    document.querySelector('#sH3'),
    document.querySelector('#aH3'),
    document.querySelector('#bH3'),
    document.querySelector('#cH3'),
    document.querySelector('#dH3'),
];

const [simg, aimg, bimg, cimg, dimg] = [
    document.querySelector('#simg'),
    document.querySelector('#aimg'),
    document.querySelector('#bimg'),
    document.querySelector('#cimg'),
    document.querySelector('#dimg'),
];

const classeInputs = [];
const classNames = ['s', 'a', 'b', 'c', 'd'];

for(let i = 0; i < 5; i++) {
    const inputX = document.createElement('input');
    inputX.type = 'text';
    inputX.classList.add('tier-classe-input');
    inputX.style.fontSize = '1.5rem';
    inputX.style.width = '13rem';
    inputX.id = classNames[i] + 'input';
    classeInputs.push(inputX);
}

simg.addEventListener('click', () => {
    if(simg.src[simg.src.length-5] === 'r') {
        simg.src = './assets/images/salvar-arquivo.png';
        s.removeChild(simg);
        s.removeChild(sh3);
        s.appendChild(classeInputs[0]);
        classeInputs[0].style.backgroundColor = 'inherit';
        classeInputs[0].style.border = '1px solid black';
        s.appendChild(simg);
        
    } else if(simg.src[simg.src.length-5] === 'o') {
        simg.src = './assets/images/editar.png';
        if(classeInputs[0].value) {
            sh3.innerHTML = classeInputs[0].value;
        } else {
            sh3.innerHTML = classNames[0].toUpperCase();
        }
        s.removeChild(simg);
        s.removeChild(classeInputs[0]);
        s.appendChild(sh3);
        s.appendChild(simg);
        
    }
});

aimg.addEventListener('click', () => {
    if(aimg.src[aimg.src.length-5] === 'r') {
        aimg.src = './assets/images/salvar-arquivo.png';
        a.removeChild(aimg);
        a.removeChild(ah3);
        a.appendChild(classeInputs[1]);
        classeInputs[1].style.backgroundColor = 'inherit';
        classeInputs[1].style.border = '1px solid black';
        a.appendChild(aimg);
        
    } else if(aimg.src[aimg.src.length-5] === 'o') {
        aimg.src = './assets/images/editar.png';
        if(classeInputs[1].value) {
            ah3.innerHTML = classeInputs[1].value;
        } else {
            ah3.innerHTML = classNames[1].toUpperCase();
        }
        a.removeChild(aimg);
        a.removeChild(classeInputs[1]);
        a.appendChild(ah3);
        a.appendChild(aimg);
        
    }
});

bimg.addEventListener('click', () => {
    if(bimg.src[bimg.src.length-5] === 'r') {
        bimg.src = './assets/images/salvar-arquivo.png';
        b.removeChild(bimg);
        b.removeChild(bh3);
        b.appendChild(classeInputs[2]);
        classeInputs[2].style.backgroundColor = 'inherit';
        classeInputs[2].style.border = '1px solid black';
        b.appendChild(bimg);
        
    } else if(bimg.src[bimg.src.length-5] === 'o') {
        bimg.src = './assets/images/editar.png';
        if(classeInputs[2].value) {
            bh3.innerHTML = classeInputs[2].value;
        } else {
            bh3.innerHTML = classNames[2].toUpperCase();
        }
        b.removeChild(bimg);
        b.removeChild(classeInputs[2]);
        b.appendChild(bh3);
        b.appendChild(bimg);
        
    }
});

cimg.addEventListener('click', () => {
    if(cimg.src[cimg.src.length-5] === 'r') {
        cimg.src = './assets/images/salvar-arquivo.png';
        c.removeChild(cimg);
        c.removeChild(ch3);
        c.appendChild(classeInputs[3]);
        classeInputs[3].style.backgroundColor = 'inherit';
        classeInputs[3].style.border = '1px solid black';
        c.appendChild(cimg);
        
    } else if(cimg.src[cimg.src.length-5] === 'o') {
        cimg.src = './assets/images/editar.png';
        if(classeInputs[3].value) {
            ch3.innerHTML = classeInputs[3].value;
        } else {
            ch3.innerHTML = classNames[3].toUpperCase();
        }
        c.removeChild(cimg);
        c.removeChild(classeInputs[3]);
        c.appendChild(ch3);
        c.appendChild(cimg);
        
    }
});

dimg.addEventListener('click', () => {
    if(dimg.src[dimg.src.length-5] === 'r') {
        dimg.src = './assets/images/salvar-arquivo.png';
        d.removeChild(dimg);
        d.removeChild(dh3);
        d.appendChild(classeInputs[4]);
        classeInputs[4].style.backgroundColor = 'inherit';
        classeInputs[4].style.border = '1px solid black';
        d.appendChild(dimg);
        
    } else if(dimg.src[dimg.src.length-5] === 'o') {
        dimg.src = './assets/images/editar.png';
        if(classeInputs[4].value) {
            dh3.innerHTML = classeInputs[4].value;
        } else {
            dh3.innerHTML = classNames[4].toUpperCase();
        }
        d.removeChild(dimg);
        d.removeChild(classeInputs[4]);
        d.appendChild(dh3);
        d.appendChild(dimg);
        
    }
});

//Drag and drop zone

const dropFileZone = document.querySelector('.imgs-box');

function imgRemove(event) {
    const element = event.srcElement;
    const father = element.parentNode;
    father.removeChild(element);
}

function dropHandler(event) {
    // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
    event.preventDefault();

    if (event.dataTransfer.items) {
        // Use a interface DataTransferItemList para acessar o (s) arquivo (s)
        for (var i = 0; i < event.dataTransfer.items.length; i++) {
            // Se os itens soltos não forem arquivos, rejeite-os
            if (event.dataTransfer.items[i].kind === 'file') {
                let file = event.dataTransfer.items[i].getAsFile();
                let freader = new FileReader();
                freader.readAsDataURL(file);
                freader.onloadend = (imgEvent) => {
                    const imgA = document.createElement('img');
                    imgA.style.height = '7.5rem';
                    imgA.draggable = true;
                    imgA.src = imgEvent.target.result;
                    dropFileZone.appendChild(imgA);
                    imgA.addEventListener('dragend', imgRemove);
                };
            }
        }
    } else {
        // Use a interface DataTransfer para acessar o (s) arquivo (s)
        for (var i = 0; i < event.dataTransfer.files.length; i++) {
            let freader = new FileReader();
            freader.readAsDataURL(event.dataTransfer.files[i]);
            freader.onloadend = (imgEvent) => {
                const imgA = document.createElement('img');
                imgA.style.height = '7.5rem';
                imgA.draggable = true;
                imgA.src = imgEvent.target.result;
                dropFileZone.appendChild(imgA);
                imgA.addEventListener('dragend', imgRemove);
            };
            
        }
    }
}

function dragOverHandler(event) {
    // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
    event.preventDefault();
}

dropFileZone.addEventListener('drop', dropHandler);
dropFileZone.addEventListener('dragover', dragOverHandler);

const [sDrop, aDrop, bDrop, cDrop, dDrop] = [
    document.querySelector('#sdrop'),
    document.querySelector('#adrop'),
    document.querySelector('#bdrop'),
    document.querySelector('#cdrop'),
    document.querySelector('#ddrop'),
];

function manipulateImg(event, track) {
    if (event.dataTransfer.items) {
        // Use a interface DataTransferItemList para acessar o (s) arquivo (s)
        for (var i = 0; i < event.dataTransfer.items.length; i++) {
            // Se os itens soltos não forem arquivos, rejeite-os
            if (event.dataTransfer.items[i].kind === 'file') {
                let file = event.dataTransfer.items[i].getAsFile();
                let freader = new FileReader();
                freader.readAsDataURL(file);
                freader.onloadend = (imgEvent) => {
                    const imgA = document.createElement('img');
                    imgA.style.height = '7.5rem';
                    imgA.draggable = true;
                    imgA.src = imgEvent.target.result;
                    track.appendChild(imgA);
                    imgA.addEventListener('dragend', imgRemove);
                };
            }
        }
    } else {
        // Use a interface DataTransfer para acessar o (s) arquivo (s)
        for (var i = 0; i < event.dataTransfer.files.length; i++) {
            let freader = new FileReader();
            freader.readAsDataURL(event.dataTransfer.files[i]);
            freader.onloadend = (imgEvent) => {
                const imgA = document.createElement('img');
                imgA.style.height = '7.5rem';
                imgA.draggable = true;
                imgA.src = imgEvent.target.result;
                track.appendChild(imgA);
                imgA.addEventListener('dragend', imgRemove);
            };
            
        }
    }
}

sDrop.addEventListener('dragover', dragOverHandler);
sDrop.addEventListener('drop', (event) => {
    event.preventDefault();
    manipulateImg(event, sDrop);
});

aDrop.addEventListener('dragover', dragOverHandler);
aDrop.addEventListener('drop', (event) => {
    event.preventDefault();
    manipulateImg(event, aDrop);
});

bDrop.addEventListener('dragover', dragOverHandler);
bDrop.addEventListener('drop', (event) => {
    event.preventDefault();
    manipulateImg(event, bDrop);
});

cDrop.addEventListener('dragover', dragOverHandler);
cDrop.addEventListener('drop', (event) => {
    event.preventDefault();
    manipulateImg(event, cDrop);
});

dDrop.addEventListener('dragover', dragOverHandler);
dDrop.addEventListener('drop', (event) => {
    event.preventDefault();
    manipulateImg(event, dDrop);
});