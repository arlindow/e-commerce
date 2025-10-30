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

// Lista de textos para exibir no banner
const titulos = [
  "Promoções da Semana",
  "Ofertas Relâmpago 💥",
  "Novidades Exclusivas 🔥",
  "Descontos de até 50%!"
];

const textos = [
  "Descontos imperdíveis em eletrônicos!",
  "Aproveite antes que acabe!",
  "Confira os lançamentos mais quentes!",
  "Compre agora e economize!"
];

// Pega os elementos do HTML
const tituloBanner = document.getElementById("titulo-banner");
const textoBanner = document.getElementById("texto-banner");

let indice = 0;

// Função para trocar os textos
function mudarTexto() {
  indice = (indice + 1) % titulos.length; // volta ao início quando chegar ao fim
  tituloBanner.textContent = titulos[indice];
  textoBanner.textContent = textos[indice];
}

// Troca o texto a cada 4 segundos (4000 ms)
setInterval(mudarTexto, 3000);
