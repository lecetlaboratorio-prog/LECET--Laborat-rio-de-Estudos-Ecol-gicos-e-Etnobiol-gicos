const form = document.getElementById('formContato');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
  });
}

// BOTÃO "VER MAIS" DA EQUIPE
function toggleEquipe() {
  const mais = document.getElementById("maisEquipe");
  const btn = document.getElementById("btnEquipe");

  if (mais.style.display === "none" || mais.style.display === "") {
    mais.style.display = "flex";
    btn.innerText = "Ver menos";
  } else {
    mais.style.display = "none";
    btn.innerText = "Ver mais";
  }
}
