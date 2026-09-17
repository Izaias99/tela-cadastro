document.getElementById("cadForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const li = document.createElement("li");
  li.innerHTML = `<strong>${nome}</strong><br><small>${endereco}</small>`;
  document.getElementById("listaClientes").appendChild(li);
  document.getElementById("cadForm").reset();
});
