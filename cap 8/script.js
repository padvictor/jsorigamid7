function $$(selectedElement) {
  const elements = document.querySelectorAll(selectedElement);

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    });
    return $$(selectedElement);
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    });
    return $$(selectedElement);
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback)
    });
    return $$(selectedElement);
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className)
    });
    return $$(selectedElement);
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className)
    });
    return $$(selectedElement);
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  }
}

const btns = $$('button');

console.log(btns.hide().show());

function handleClick(event) {
  console.log(event.target);
  btns.addClass('active');
}


btns.on('click', handleClick)



// Exercicis Destructuring 
// Extraia o backgroundColor, color e margin do btn

// const btn = document.querySelector('button');
// const btnStyle = getComputedStyle(btn);

// const {backgroundColor, margin, color} = btnStyle;

// Troque os valores das variáveis abaixo
// let cursoAtivo = "JavaScript";

// let cursoInativo = "HTML";

// [cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

// // corrija o erro abaixo
// const cachorro {
//   nome: 'Bob',
//   raca: 'Labrador',
//   cor: 'Amarelo',
// };

// // const {bobCor: cor} = cachorro; errado
// const {cor: bobCor} = cachorro;