let carrinho = [];
let contadorCarrinho = 0;

function comprarProduto(nomeProduto) {
  carrinho.push(nomeProduto);
  contadorCarrinho++;
  alert(`"${nomeProduto}" foi adicionado ao carrinho!`);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const indicador = document.getElementById('contador-carrinho');
  if (indicador) {
    indicador.textContent = contadorCarrinho;
  }

  const lista = document.getElementById('lista-carrinho');
  if (lista) {
    lista.innerHTML = "";
    carrinho.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      lista.appendChild(li);
    });
  }
}

function abrirCarrinho() {
  document.getElementById('modal-carrinho').classList.remove('oculto');
  atualizarCarrinho();
}

function fecharCarrinho() {
  document.getElementById('modal-carrinho').classList.add('oculto');
}
