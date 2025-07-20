function mostrarElogio() {
  const elogios = [
    "Você é brilhante!",
    "Seu código é arte! 🎨",
    "Continue incrível assim!",
    "Você é inspiração!",
    "Desenvolvedora top demais! 🚀"
  ];

  const random = Math.floor(Math.random() * elogios.length);
  document.getElementById("elogio").innerText = elogios[random];
}
