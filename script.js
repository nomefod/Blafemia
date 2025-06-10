function gerarArte() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "<p>Gerando arte...</p>";

  setTimeout(() => {
    const random = Math.floor(Math.random() * 1000);
    const url = `https://source.unsplash.com/random/800x600?sig=${random}&art`;
    resultado.innerHTML = `<img src="${url}" alt="Arte gerada pela IA">`;
  }, 1500);
}
