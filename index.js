var tabseg = document.querySelectorAll('#Tabeladias td')[0];
var tabter = document.querySelectorAll('#Tabeladias td')[1];
var tabqua = document.querySelectorAll('#Tabeladias td')[2];
var tabqui = document.querySelectorAll('#Tabeladias td')[3];
var tabsex = document.querySelectorAll('#Tabeladias td')[4];
var tabsab = document.querySelectorAll('#Tabeladias td')[5];
var tabdom = document.querySelectorAll('#Tabeladias td')[6];

var comidaBD = [];

var btnInserir = document.querySelector('#inserircomida');
var btnExcluir = document.querySelector('#excluircomida');
var btnEditar = document.querySelector('#editarcomida');

btnInserir.onclick = function() {
    var comida = document.getElementById('comida').value;
    var OpcaoSelecionada = document.querySelector('#dias').value; 

    let cardapio = new Object();
    cardapio.nome = comida;
    cardapio.id = comidaBD.length;

    switch(OpcaoSelecionada) {
        case 'Segunda': 
            comidaBD.push(cardapio);
            tabseg.innerHTML += `<tr><td><input type="checkbox" id='${cardapio.id}'>${comida}</td><br></tr>`;
            break; 
        case 'Terça':
            comidaBD.push(cardapio);
            tabter.innerHTML += `<tr><td><input type="checkbox" id='${cardapio.id}'>${comida}</td><br></tr>`;
            break; 
        case 'Quarta': 
            comidaBD.push(cardapio);
            tabqua.innerHTML += `<tr><td><input type="checkbox" id='${cardapio.id}'>${comida}</td><br></tr>`;
            break;
        case 'Quinta':
            comidaBD.push(cardapio);
            tabqui.innerHTML += `<tr><td><input type="checkbox" id='${cardapio.id}'>${comida}</td><br></tr>`;
            break;
        case 'Sexta':
            comidaBD.push(cardapio);
            tabsex.innerHTML += `<tr><td><input type="checkbox" id='${cardapio.id}'>${comida}</td><br></tr>`;
            break;
        case 'Sabado':
            comidaBD.push(cardapio);
            tabsab.innerHTML += `<tr><td><input type="checkbox" id='${cardapio.id}'>${comida}</td><br></tr>`;
            break;
        case 'Domingo':
            comidaBD.push(cardapio);
            tabdom.innerHTML += `<tr><td><input type="checkbox" id='${cardapio.id}'>${comida}</td><br></tr>`;
            break;
    }
};


btnEditar.onclick = function() {
    let novaComida = document.querySelector('#comida').value;
    let elementosSelecionados = document.querySelectorAll('#Tabeladias input[type="checkbox"]:checked');

    if (elementosSelecionados.length > 0) {
        elementosSelecionados.forEach(elemento => {
            let id = elemento.id;
            let index = parseInt(id);
            
            // Atualizar o nome da comida na matriz comidaBD com o valor da nova comida
            comidaBD[index].nome = novaComida;
            
            // Atualizar o texto do próximo elemento irmão do checkbox selecionado para refletir a edição da comida
            elemento.nextSibling.textContent = novaComida;
        });
        // Limpar o valor do campo de entrada após a edição
        document.getElementById('comida').value = '';
    } else {
        alert('Por favor, selecione uma comida para editar.');
    }
};

btnExcluir.onclick = function() {
    
};

