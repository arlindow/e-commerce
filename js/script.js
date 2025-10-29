// Alerta ao adicionar ao carrinho
const botoesCarrinho = document.querySelectorAll(".add-carrinho");

botoesCarrinho.forEach(botao => {
  botao.addEventListener("click", () => {
    alert("Produto adicionado ao carrinho!");
  });
});

// Envio do formulário de contato
const form = document.getElementById("form-contato");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
  });
}

