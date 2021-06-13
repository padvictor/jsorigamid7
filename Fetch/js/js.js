// Utilizando o API https://viacep.com.br/ws/${cep}/json/ crie um formulário onde o usuário pode digitar o CEP e o endereço completo e retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
 const btnCep = document.querySelector('btnCep');
 const resultadoCep = document.querySelector('.resultadoCep');

 inputCep.addEventListener('keyUp', handleClick);

 function handleClick(event) {
 event.preventDefault();
 const cep = inputCep.value;
 buscaCep(cep);
 }

 function buscaCep(cep) {
   fetch(`https://viacep.com.br/ws/${cep}/json/`)
   .then(response => response.text())
   .then(body => {
     resultadoCep.innerText = body;
   })
 }



// Utilizando o API https://blockchain.info/ticker retorne no DOM o valor de compra de bitcoin and reais utilize este valor a cada 30s
const btcDisplay = document.querySelector('.btc');

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson => {
    btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
  })
}

// setInterval(fetchBtc, 500);

fetchBtc();


// Utilizando a API https://api.chucknorris.io/jokes/random retorne uma piada randomica do chuck, todas ver que clicar em próxima
const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada')



function puxarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piada => {
    paragrafoPiada.innerText = piada.value;
  })
}

btnProxima.addEventListener('click', puxarPiada);

puxarPiada();